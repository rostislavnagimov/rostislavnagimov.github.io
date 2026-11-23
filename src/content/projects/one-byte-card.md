---
title: one-byte-card
summary: Dependency-free Rust encoding for playing-card values in a single byte.
highlights:
  - Packs suit, rank, and state into one byte.
  - Supports standard cards and red or black jokers.
  - Provides a small encode/decode API with no dependencies.
repo: https://github.com/rostislavnagimov/one-byte-card
crates: https://crates.io/crates/one-byte-card
order: 4
---

`one-byte-card` packs a playing card into one byte using a compact suit, rank, and state representation.

## Usage

```rust
use one_byte_card::{decode, encode};

assert_eq!(decode(encode("JD3")), "JD3");
```

The format uses 2 bits for the suit, 4 for the rank, and 2 for the optional state. It supports the four standard suits, ranks from ace through king, and red or black jokers. Invalid input encodes as `0`; decoding an invalid byte returns an empty string.
