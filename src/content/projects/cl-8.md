---
title: CL-8
summary: Compact 8-bit text encoding for Cyrillic and Latin, with Unicode fallback and a zero-allocation no_std core.
highlights:
  - Reduces common Cyrillic prose by about 45% compared with UTF-8.
  - Supports 41 languages and transparent UTF-8 fallback.
  - Uses a zero-allocation no_std core with caller-provided buffers.
repo: https://github.com/rostislavnagimov/cl-8
crates: https://crates.io/crates/cl-8
order: 5
---

CL-8 is a compact text encoding for Cyrillic and Latin. Common base characters use one byte; diacritics use a modifier and base, while unsupported Unicode passes through a transparent UTF-8 fallback.

## Highlights

- Encodes standard Russian Cyrillic letters in one byte, reducing Cyrillic prose size by about 45% compared with UTF-8.
- Supports 41 languages through direct mappings and diacritic modifiers.
- Uses a zero-allocation `no_std` core with caller-provided buffers and no runtime dependencies.
- Includes an optional allocating API behind the `alloc` or `std` feature.

## Core API

```rust
use cl8::{decode_into, encode_into};

let text = "Привет, World!";
let mut encoded = [0u8; 64];
let encoded_len = encode_into(text, &mut encoded).unwrap();

let mut decoded = [0u8; 64];
let decoded_len = decode_into(&encoded[..encoded_len], &mut decoded).unwrap();
assert_eq!(core::str::from_utf8(&decoded[..decoded_len]).unwrap(), text);
```

The codec expects NFC-normalized input. The repository includes examples and benchmarks for multilingual text, Unicode fallback, and optional compression after encoding.
