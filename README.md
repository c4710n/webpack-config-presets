# webpack-config-parts

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Parts of Webpack configurations.

<!-- start: markdown-toc -->

- [Install](#install)
- [Usage](#usage)
- [Build Options](#build-options)
  - [Environment Variables](#environment-variables)
- [Examples](#examples)
- [License](#license)

<!-- end: markdown-toc -->

## Install

```
$ npm install webpack-config-parts
```

## Usage

```js
const { setupIO } = require('webpack-config-parts')
```

## Build Options

### Environment Variables

| Name            | Description                          | Default Value    | Example Value              |
| --------------- | ------------------------------------ | ---------------- | -------------------------- |
| `W_PUBLIC_PATH` | Public path for serving static files | `<empty string>` | `https://cdn.example.com/` |
| `W_FILE_FLAT`   | Enable flat file structure           | `<empty string>` | `true`                     |
| `W_FILE_HASH`   | Enable file hash                     | `<empty string>` | `true`                     |

## Why create this?

I'm tired of writing the same configurations again and again.

## I think you should...

Uhh... This package is published for myself, If you don't like it, just fuck off.

## License

MIT
