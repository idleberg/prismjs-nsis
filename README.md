# prism-nsis

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/prism-nsis.svg?style=flat-square)](https://www.npmjs.org/package/prism-nsis)
[![Bower](https://img.shields.io/bower/v/prism-nsis.svg?style=flat-square)]()
[![Travis](https://img.shields.io/travis/idleberg/prismjs-nsis.svg?style=flat-square)](https://travis-ci.org/idleberg/prismjs-nsis)
[![David](https://img.shields.io/david/dev/idleberg/prismjs-nsis.svg?style=flat-square)](https://david-dm.org/idleberg/prismjs-nsis?type=dev)

NSIS syntax highlighter for PrismJS, a lightweight, extensible syntax highlighter, built with modern web standards in mind.

**Note:** The official PrismJS distribution already ships with NSIS support, but development might divert in the future

## Installation

### npm

```bash
$ npm install prism-nsis
```
### Bower

```bash
$ bower install prism-nsis

# Build
$ cd prism-nsis
$ yarn || npm install
```

## Usage

### Build

A minified JavaScript package will be built automatically after installing with NPM. To manually trigger a build, run `gulp build`. If you with to support [InstallOptions](http://nsis.sourceforge.net/Docs/InstallOptions/Readme.html), use `gulp build --ini` to include the highlighter for INI files.

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/prismjs-nsis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
