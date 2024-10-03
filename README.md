# Colorhacks

[![npm package][npm-img]][npm-url] [![Build Status][build-img]][build-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url] [![Semantic Release][semantic-release-img]][semantic-release-url]

> Colorhacks is a collection of color conversion and manipulation utilities for TypeScript.

- [Colorhacks](#colorhacks)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
    - [pnpm](#pnpm)
    - [bun](#bun)
  - [Usage](#usage)
  - [API](#api)
  - [License](#license)
  - [Contributing](#contributing)

## Install

### npm

```bash
npm install @sillybit/colorhacks
```

### yarn

```bash
yarn add @sillybit/colorhacks
```

### pnpm

```bash
pnpm add @sillybit/colorhacks
```

### bun

```bash
bun add @sillybit/colorhacks
```

## Usage

```ts
import { getColorNameFromHex } from '@sillybit/colorhacks';

getColorNameFromHex('#FF0000');
// returns { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
```

## API

For more examples and API details, see the [docs](https://sillybit-io.github.io/colorhacks/).

## License

You can use this under the MIT license. See the [LICENSE](./LICENSE) file for more details.

## Contributing

We welcome contributions to this project. Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) file for more details.

[build-img]: https://github.com/sillybit-io/colorhacks/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/sillybit-io/colorhacks/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@sillybit/colorhacks
[downloads-url]: https://www.npmtrends.com/@sillybit/colorhacks
[npm-img]: https://img.shields.io/npm/v/@sillybit/colorhacks
[npm-url]: https://www.npmjs.com/package/@sillybit/colorhacks
[issues-img]: https://img.shields.io/github/issues/sillybit-io/colorhacks
[issues-url]: https://github.com/sillybit-io/colorhacks/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
