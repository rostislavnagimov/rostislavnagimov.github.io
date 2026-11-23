---
title: shortest-color
summary: Zero-dependency Rust library that parses CSS colors and returns their shortest valid representation.
highlights:
  - Parses and shortens CSS color values in under 120 ns.
  - Keeps runtime dependencies and binary footprint small.
  - Supports common color forms such as hex, RGB, and named colors.
repo: https://github.com/rostislavnagimov/shortest-color
crates: https://crates.io/crates/shortest-color
order: 1
---

`shortest-color` parses CSS color values and converts them to the shortest equivalent CSS representation. The crate is designed for build tools, minifiers, and other performance-sensitive Rust applications.

The project targets a small binary footprint and reports parsing in under 120 ns, with no runtime dependencies.

## Usage

```rust
use shortest_color::shorten_css_color;

assert_eq!(shorten_css_color("#ff0000"), "red");
assert_eq!(shorten_css_color("rgb(0,0,255)"), "blue");
assert_eq!(shorten_css_color("WHITE"), "#fff");
```

Install it with Cargo:

```sh
cargo add shortest-color
```
