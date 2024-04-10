#include "card.h"
#include "task.h"
#include <emscripten/threading.h>

using namespace eacardgen;

auto convert = std::unique_ptr<card_convert> {};
auto alphabet = std::string_view { "0123456789ABCDEFGHJKLMNPRSTUWXYZ" };

task::task(std::string&& card):
    _card { std::move(card) } {}

auto task::start() -> bool
{
    if (_complete || _running || _card.size() != 16)
        return false;

    for (auto i = 0U; i < _card.size() - 3; ++i)
        if (_card[i] == '?')
            _indices.emplace_back(i);
        else if (alphabet.find(_card[i]) == std::string::npos)
            return false;

    _total = std::pow(alphabet.size(), _indices.size());
    _future = std::async(std::launch::async, [this]
    {
        _running = true;
        _complete = false;

        notify_status("active");
        perform(0);

        _running = false;
        _complete = true;

        notify_progress();
        notify_status("complete");
    });

    return true;
}

auto task::stop() -> void
    { _running = false; }

auto task::on(std::string&& event, emscripten::val&& callback) -> void
    { _events[std::move(event)].emplace_back(std::move(callback)); }

auto task::perform(std::uint8_t index) -> void
{
    if (!_running)
        return;

    if (index != _indices.size())
    {
        for (auto&& ch: alphabet)
        {
            _card[_indices.at(index)] = ch;
            perform(index + 1);
        }

        return;
    }

    ++_iterations;

    if (progress_timer::clock::now() - _progress_timer > _progress_interval)
        notify_progress();

    auto nfc_id = uint8x8_t {};
    auto card_id = uint8x16_t {};

    std::ranges::transform(_card, card_id.begin(), [] (auto c)
        { return static_cast<std::uint8_t>(alphabet.find(c)); });

    if (card_id[12] % 2 != card_id[11] % 2)
        return;

    card_id[13] = card_id[12] ^ 1;
    card_id[14] = 2; // FeliCa
    card_id[15] = card_convert::checksum(card_id);

    if (!convert->to_nfc_id(card_id, nfc_id)) [[likely]]
        return;

    auto nfc_str = std::string(16, '\0');
    auto card_str = std::string(16, '\0');

    std::sprintf(nfc_str.data(), "%02X%02X%02X%02X%02X%02X%02X%02X",
        nfc_id[0], nfc_id[1], nfc_id[2], nfc_id[3],
        nfc_id[4], nfc_id[5], nfc_id[6], nfc_id[7]);

    std::ranges::transform(card_id, card_str.begin(), [] (auto i)
        { return alphabet[i]; });

    notify_match(_matches.emplace_back(std::move(nfc_str), std::move(card_str)));
}

auto task::notify_status(std::string_view type) -> void
{
    if (!_events.contains("status"))
        return;

    emscripten_async_run_in_main_runtime_thread(EM_FUNC_SIG_VII,
        +[] (event_store* events, const char* type)
    {
        for (auto&& callback: events->at("status"))
            callback(std::string { type });
    }, &_events, type.data());
}

auto task::notify_match(const card_id& match) -> void
{
    if (!_events.contains("match"))
        return;

    emscripten_async_run_in_main_runtime_thread(EM_FUNC_SIG_VII,
        +[] (event_store* events, card_id* match)
    {
        for (auto&& callback: events->at("match"))
            callback(match->first, match->second);
    }, &_events, &match);
}

auto task::notify_progress() -> void
{
    _progress_timer = progress_timer::clock::now();

    if (!_events.contains("progress"))
        return;

    emscripten_async_run_in_main_runtime_thread(EM_FUNC_SIG_VIFF,
        +[] (event_store* events, float iterations, float total)
    {
        for (auto&& callback: events->at("progress"))
            callback(iterations, total);
    }, &_events, _iterations, _total);
}

EMSCRIPTEN_BINDINGS(eacardgen)
{
    using namespace emscripten;

    convert = std::make_unique<card_convert>();

    class_<task>("CardSearchTask")
        .constructor<std::string>()
        .function("start", &task::start)
        .function("stop", &task::stop)
        .function("on", &task::on);
}