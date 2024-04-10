#pragma once

#include <array>
#include <memory>

namespace eacardgen
{
    using uint8x8_t  = std::array<std::uint8_t, 8>;
    using uint8x16_t = std::array<std::uint8_t, 16>;
    using uint8x24_t = std::array<std::uint8_t, 24>;

    class card_convert
    {
        class impl;

        public:
            card_convert();
            ~card_convert();

            auto static pack(const uint8x16_t& data) -> uint8x8_t;
            auto static checksum(const uint8x16_t& in) -> std::uint8_t;
            auto to_nfc_id(const uint8x16_t& in, uint8x8_t& out) const -> bool;
        private:
            std::unique_ptr<impl> _impl;
    };
}