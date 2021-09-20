// [![Actions Status](https://github.com/bigeasy/vivifyer/workflows/Node%20CI/badge.svg)](https://github.com/bigeasy/vivifyer/actions)
// [![codecov](https://codecov.io/gh/bigeasy/vivifyer/branch/master/graph/badge.svg)](https://codecov.io/gh/bigeasy/vivifyer)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//
// A map that creates a default object if one does not exist.
//
// | What          | Where                                         |
// | --- | --- |
// | Discussion    | https://github.com/bigeasy/vivifyer/issues/1  |
// | Documentation | https://bigeasy.github.io/vivifyer            |
// | Source        | https://github.com/bigeasy/vivifyer           |
// | Issues        | https://github.com/bigeasy/vivifyer/issues    |
// | CI            | https://travis-ci.org/bigeasy/vivifyer        |
// | Coverage:     | https://codecov.io/gh/bigeasy/vivifyer        |
// | License:      | MIT                                           |

// ## Overview
//
// Extant is an implementation of SQL's COALESCE that I've used for some time to
// deal with the fact that JavaScript truthiness will treat `''` and `0` as true so
// the `||` operator can't always be used to create given or default one-liner.

(function () {
    const { compare, raise, equal } = require('..')
}) ()

// We use the name "extant" on NPM because we want the first extant argument.
//
// ## Living `README.md`
//
// This `README.md` is also a unit test using the
// [Proof](https://github.com/bigeasy/proof) unit test framework. We'll use the
// Proof `okay` function to assert out statements in the readme. A Proof unit test
// generally looks like this.

require('proof')(1, async okay => {
    // ## Usage
    //
    // The `'extant'` module exports a single `coalesce` function.

    const vivifyer = require('..')

    // Note that Extant is SQL's `COALESCE`. It returns the first non-null-like value,
    // that is the first value that is not `== null`, which would be `null` or
    // `undefined`. If there is no such argument it returns `null`.

    okay('test')
})

// You can run this unit test yourself to see the output from the various
// code sections of the readme.
