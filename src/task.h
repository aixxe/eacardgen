#pragma once

#include <string>
#include <future>
#include <emscripten/bind.h>

namespace eacardgen
{
    using card_id = std::pair<std::string, std::string>;
    using event_store = std::unordered_map<std::string, std::vector<emscripten::val>>;
    using progress_timer = std::chrono::time_point<std::chrono::steady_clock>;
    using progress_interval = std::chrono::milliseconds;

    class task
    {
        public:
            explicit task(std::string&& card);

            auto start() -> bool;
            auto stop() -> void;
            auto on(std::string&& event, emscripten::val&& callback) -> void;
        private:
            auto perform(std::uint8_t index = 0) -> void;
            auto notify_status(std::string_view type) -> void;
            auto notify_match(const card_id& match) -> void;
            auto notify_progress() -> void;

            bool _running = false;
            bool _complete = false;
            double _total {};
            double _iterations {};
            std::string _card {};
            event_store _events {};
            std::future<void> _future {};
            std::vector<card_id> _matches {};
            std::vector<std::uint8_t> _indices {};
            progress_timer _progress_timer {};
            progress_interval _progress_interval { 100 };
    };
}