# eslint-plugin-coherence
[![npm](https://img.shields.io/npm/v/eslint-plugin-coherence)](https://www.npmjs.com/package/eslint-plugin-coherence)
[![Build Status](https://travis-ci.com/leonardodino/eslint-plugin-coherence.svg?branch=master)](https://travis-ci.com/leonardodino/eslint-plugin-coherence)
[![Code Coverage](https://badgen.net/codecov/c/github/leonardodino/eslint-plugin-coherence)](https://codecov.io/gh/leonardodino/eslint-plugin-coherence)

named after the [micro-budget movie](https://www.imdb.com/title/tt2866360/).

## Rules

### `no-const-enum`

Disallow all usages of `const enum` in TypeScript code.
It's not supported by babel.

### `no-confusing-enum`

Ensures all enum values matches their keys.
This simplifies porting plain javascript code by
avoiding pitfalls of passing enums to `Object.keys` and related methods.

## License

`MIT`
