# prism-nsis

[![npm](https://flat.badgen.net/npm/license/prism-nsis)](https://www.npmjs.org/package/prism-nsis)
[![npm](https://flat.badgen.net/npm/v/prism-nsis)](https://www.npmjs.org/package/prism-nsis)
[![Travis](https://flat.badgen.net/travis/idleberg/prismjs-nsis)](https://travis-ci.org/idleberg/prismjs-nsis)
[![David](https://flat.badgen.net/david/dev/idleberg/prismjs-nsis)](https://david-dm.org/idleberg/prismjs-nsis?type=dev)

NSIS syntax highlighter for [PrismJS](https://github.com/PrismJS/prism), a lightweight, extensible syntax highlighter, built with modern web standards in mind.

**Note:** The official PrismJS distribution already ships with NSIS support, but development might divert in the future

## Installation

```bash
# Install
$ npm install prism-nsis

# Build
$ cd prism-nsis
$ yarn || npm install
```

## Usage

### Build

A minified JavaScript package will be built automatically after installing with NPM. To manually trigger a build, run `gulp build`. If you wish to support [InstallOptions](http://nsis.sourceforge.net/Docs/InstallOptions/Readme.html), use `gulp build --ini` to include the highlighter for INI files.

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/prismjs-nsis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
