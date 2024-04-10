#include "card.h"
#include <bit>
#include <bitset>
#include <algorithm>
#include <openssl/des.h>

using namespace eacardgen;

class card_convert::impl
{
    public:
        impl();

        auto decrypt(uint8x8_t& data) -> void;
    private:
        DES_key_schedule _ks1 {};
        DES_key_schedule _ks2 {};
        DES_key_schedule _ks3 {};
};

card_convert::impl::impl()
{
    auto key = std::to_array("?I'llB2c.YouXXXeMeHaYpy!");

    std::ranges::transform(key, key.begin(), [] (auto ch)
        { return ch * 2; });

    DES_set_key(std::bit_cast<const_DES_cblock*>(&key[0]), &_ks1);
    DES_set_key(std::bit_cast<const_DES_cblock*>(&key[8]), &_ks2);
    DES_set_key(std::bit_cast<const_DES_cblock*>(&key[16]), &_ks3);
}

auto card_convert::impl::decrypt(uint8x8_t& data) -> void
{
    DES_ede3_cbc_encrypt(data.data(), data.data(), sizeof(uint8x8_t), &_ks1, &_ks2, &_ks3,
        std::bit_cast<DES_cblock*>(uint8x8_t {}.data()), DES_DECRYPT);
}

auto card_convert::pack(const uint8x16_t& data) -> uint8x8_t
{
    auto result = uint8x8_t {};
    auto packed = std::string {};

    for (auto i = 0; i < 13; ++i)
        packed += std::bitset<5>(data[i]).to_string();

    if (packed.size() % 8 != 0)
        packed.append(8 - packed.size() % 8, '0');

    for (auto i = 0, index = 0; i < packed.size() && index < 8; i += 8, ++index)
        result[index] = std::bitset<8>(packed.substr(i, 8)).to_ulong();

    return result;
}

auto card_convert::checksum(const uint8x16_t& in) -> std::uint8_t
{
    auto result = 0;

    for (auto i = 0; i < 15; ++i)
        result += (i % 3 + 1) * in[i];

    while (result >= 0x20)
        result = (result & 0x1F) + (result >> 5);

    return result;
}

auto card_convert::to_nfc_id(const uint8x16_t& in, uint8x8_t& out) const -> bool
{
    auto nfc_id = in;

    for (auto i = 13; i > 0; --i)
        nfc_id[i] ^= nfc_id[i - 1];

    nfc_id[0] ^= 2; // FeliCa

    out = pack(nfc_id);

    _impl->decrypt(out);

    std::ranges::reverse(out);

    return out[0] == 0x02 && out[1] == 0xFE;
}

card_convert::card_convert():
    _impl(std::make_unique<impl>()) {}

card_convert::~card_convert() = default;