# egg-dubbo-tracer

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dubbo-tracer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dubbo-tracer
[travis-image]: https://img.shields.io/travis/eggjs/egg-dubbo-tracer.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-dubbo-tracer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-dubbo-tracer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-dubbo-tracer?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-dubbo-tracer.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-dubbo-tracer
[snyk-image]: https://snyk.io/test/npm/egg-dubbo-tracer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dubbo-tracer
[download-image]: https://img.shields.io/npm/dm/egg-dubbo-tracer.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dubbo-tracer

<!--
Description here.
-->

## Install

```bash
$ npm i egg-dubbo-tracer --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dubboTracer = {
  enable: true,
  package: 'egg-dubbo-tracer',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.dubboTracer = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
