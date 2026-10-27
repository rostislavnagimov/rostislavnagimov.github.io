---
title: shortest-color
summary: Ultra-fast CSS color parser - <120ns, <6KB, zero dependencies. For hex, rgb/rgba, hsl/hsla, keywords
repo: https://github.com/rostislavnagimov/shortest-color
crates: https://crates.io/crates/shortest-color
order: 1
---

## Overview

`shortest-color` is an ultra-fast, zero-dependency Rust library designed to parse CSS colors and convert them into their shortest valid string representation.

Built for production bundlers, CSS minifiers, compilers, and performance-critical systems where sub-microsecond latency is required.

## Key Features

- **Blazing Fast**: Parses and converts arbitrary CSS color strings in `<120ns`.
- **Minimal Footprint**: Adds `<6KB` to your binary size.
- **Zero Allocations**: Pure stack-allocated parsing without heap overhead.
- **Broad Format Support**:
  - Hex values: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`
  - RGB / RGBA functions: `rgb(r, g, b)`, `rgba(r, g, b, a)`
  - HSL / HSLA functions: `hsl(h, s, l)`, `hsla(h, s, l, a)`
  - Named CSS keywords: `transparent`, `currentcolor`, and standard color names.

## Architecture

The parser avoids heavy regular expressions and full AST parsing. Instead, it leverages branchless character lookups, SIMD-aligned byte scanning, and precomputed color map tables to resolve hex, rgb, and named keywords in sub-microsecond time.

## Installation

```bash
cargo add shortest-color
```

## Quick Start

```rust
use shortest_color::ShortestColor;

fn main() {
    let result = ShortestColor::parse("rgba(255, 255, 255, 1.0)");
    assert_eq!(result.as_str(), "#fff");
}
```