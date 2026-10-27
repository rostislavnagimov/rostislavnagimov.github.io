---
title: base88
summary: Binary-to-text encoding designed for the web. Encodes arbitrary binary data into a string that is valid in JSON, HTML attributes, and JavaScript string literals — without any escaping.
repo: https://github.com/rostislavnagimov/base88
crates: https://crates.io/crates/base88
order: 2
---

## Overview

`base88` is a modern binary-to-text encoding designed specifically for web and networking workloads.

Unlike Base64, which frequently introduces characters requiring URL or HTML escaping (`+`, `/`, `=`), Base88 selects 88 printable ASCII characters that are completely safe within JSON strings, HTML attributes, and JavaScript literals without any escaping.

## Why Base88?

- **~15% Smaller Payload**: Produces strings roughly 15% more compact than standard Base64.
- **No Padding**: Avoids unnecessary padding characters like `=`.
- **Zero Escaping**: Safe in JSON strings, HTML attributes, URLs, and shell arguments.
- **High Performance**: Streaming encoder and decoder implementation written in pure Rust.

## Comparison Table

| Feature | Base64 | Base88 |
|---|---|---|
| Expansion factor | ~133% | ~118% |
| JSON-safe without escapes | No (`/`, `\`) | Yes |
| HTML-attribute safe | No (`&`, `"`, `'`) | Yes |
| Padding required | Yes (`=`) | No |

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