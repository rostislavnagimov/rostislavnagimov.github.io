---
title: shortest-color-cli
summary: Zero-dependency command-line tool that shortens CSS color values using shortest-color.
highlights:
  - Accepts one or more colors as command-line arguments.
  - Reads piped values from standard input.
  - Installs directly with Cargo.
repo: https://github.com/rostislavnagimov/shortest-color-cli
crates: https://crates.io/crates/shortest-color-cli
order: 3
---

`shortest-color-cli` applies the `shortest-color` parser to command-line arguments or standard input. It prints the shortest equivalent CSS value for each color.

## Usage

Pass values as arguments:

```sh
shortest-color-cli "#ff0000" "rgb(0,255,0)"
```

Or pipe a value through stdin:

```sh
echo "#ffffff" | shortest-color-cli
```

Install the CLI with Cargo:

```sh
cargo install shortest-color-cli
```
