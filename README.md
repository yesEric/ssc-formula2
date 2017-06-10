# ssc-formula2 <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> An formula editor for the Yonyou.

![ssc-formula2 in action](https://raw.githubusercontent.com/yyssc/ssc-formula2/master/ssc-formula2-demo.gif)

## Live Playground

For examples of the formula in action, go to https://yyssc.github.io/ssc-formula2.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=ssc-formula2;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save ssc-formula2 moment@>=#.## react@>=#.## react-dom@>=#.## ssc-refer2@>=#.## rc-tree@>=#.##
  ```

### Include component
```js
import { Formula } from 'ssc-formula2';
```

### Include styles
```js
import 'rc-tree/assets/index.css';
```

## 组件结构

- Formula
  - TextBox
  - FormulaTabs
    - 单据字段Tab
      - SearchBox
      - FormulaTree
    - 固定值Tab
      - [Refers]
    - 档案转换Tab

## MAINTAINING.md

How to update from v0.2.1 to v0.2.2, and publish to npm

Modify `CHANGELOG.md` to add information for v0.2.2

```
npm version patch --force
```

PS:如果直接使用`npm publish`虽然会发布到npm上，但是不会在git中打tag

TODO 如何发布v0.1.0第一版？

TODO 使用`--force`会导致打v0.2.2 tag的时候，没有包含v0.2.2的`CHANGELOG.md`的变更，比如[v0.1.1](https://github.com/yyssc/ssc-formula2/releases/tag/v0.1.1)中的`CHANGELOG.md`就是空的

[package-url]: https://npmjs.org/package/ssc-formula2
[npm-version-svg]: http://versionbadg.es/yyssc/ssc-formula2.svg
[travis-svg]: https://travis-ci.org/yyssc/ssc-formula2.svg
[travis-url]: https://travis-ci.org/yyssc/ssc-formula2
[deps-svg]: https://david-dm.org/yyssc/ssc-formula2.svg
[deps-url]: https://david-dm.org/yyssc/ssc-formula2
[dev-deps-svg]: https://david-dm.org/yyssc/ssc-formula2/dev-status.svg
[dev-deps-url]: https://david-dm.org/yyssc/ssc-formula2#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/ssc-formula2.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/ssc-formula2.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/ssc-formula2.svg
[downloads-url]: http://npm-stat.com/charts.html?package=ssc-formula2