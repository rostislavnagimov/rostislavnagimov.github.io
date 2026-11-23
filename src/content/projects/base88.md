---
title: base88
summary: Binary-to-text encoding designed for JSON, HTML attributes, and JavaScript strings.
highlights:
  - Encodes arbitrary binary data with an 88-character printable alphabet.
  - Avoids padding and escaping in common web string contexts.
  - Also includes helpers for decimal digit strings and bit strings.
repo: https://github.com/rostislavnagimov/base88
crates: https://crates.io/crates/base88
order: 2
---

## Overview

`base88` is a modern binary-to-text encoding designed specifically for web and networking workloads.

Unlike Base64, which frequently introduces characters requiring URL or HTML escaping (`+`, `/`, `=`), Base88 selects 88 printable ASCII characters that are completely safe within JSON strings, HTML attributes, and JavaScript literals without any escaping.

## Why Base88?

- **Web-safe output**: Uses a printable 88-character alphabet designed for common web string contexts.
- **No Padding**: Avoids unnecessary padding characters like `=`.
- **Zero Escaping**: Safe in JSON strings, HTML attributes, URLs, and shell arguments.
- **Pure Rust**: Includes encoder and decoder utilities for binary, digit-only, and bit-string data.

## Comparison Table

| Feature | Base64 | Base88 |
|---|---|---|
| Expansion factor | ~133% | ~126% |
| JSON-safe without escapes | No (`/`, `\`) | Yes |
| HTML-attribute safe | No (`&`, `"`, `'`) | Yes |
| Padding required | Yes (`=`) | No |

Base88 trades density against Base64 for safer output characters and a fixed-block encoding scheme. For full blocks, 19 input bytes become 24 characters, a 26.3% expansion.

## Installation

```bash
cargo add base88
```

## Quick Start

```rust
use base88::{encode, decode};

fn main() {
    let payload = b"Hello world, high-performance systems!";
    let encoded = encode(payload);
    let decoded = decode(&encoded).expect("valid base88 payload");
    assert_eq!(payload.as_slice(), decoded.as_slice());
}
```
