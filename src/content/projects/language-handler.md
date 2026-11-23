---
title: language-handler
summary: macOS utility that switches keyboard layouts according to the active application.
highlights:
  - Assigns a keyboard layout to each application through JSON rules.
  - Supports English, Russian, Simplified Chinese Pinyin, and Hindi layouts.
  - Built for Apple Silicon Macs; the public release is pre-alpha.
repo: https://github.com/rostislavnagimov/language-handler
order: 6
---

Language Handler watches the active macOS application and switches to the keyboard layout assigned to it in a JSON configuration file. It was built to make frequent switching between languages more convenient.

## Configuration

Rules map an application name to a supported language code:

```json
{
  "Terminal": "EN",
  "Google Chrome": "EN",
  "Telegram": "RU"
}
```

The published project lists English (`EN`), Russian (`RU`), Simplified Chinese Pinyin (`CN`), and Hindi Devanagari QWERTY (`HI`). The application logs show the active app name to use in the configuration.

## Running

The repository provides a prebuilt macOS ARM release and instructions for building from source with Rust. The current pre-alpha version runs in a Terminal window while active; restart it after changing its configuration.
