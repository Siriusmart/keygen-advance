# Installation
Install `keygen-advance`:

```
npm i keygen-advance
```

Create a constant:

```
const keygen = require('keygen-advance');
```

Source: [GitHub](https://github.com/Siriusmart/keygen-advance)

# Overview

Keygen-advance includes functions for generating _unique random_ strings, _url-friendly_ keys and _hexadecimal_ keys. Options to add extra characters and disallow specified characters from appearing in generated key (to prevent breaking your code)

Addition filter module to disallow unwanted/inappropriate phrases from appearing in generated key.

## Keys

* `gen(length)`

Generate random string with specified length


* `gen(length, chars)`

Generate random string using only specified characters (array)

* `url(length)`

Generate a URL-friendly key

* `hex(length)`

Generate random hexadecimal key with specified length

* `SHA256()`

Generate SHA256 keys

* `SHA512()`

Generate SHA512 keys

> __Specified Lengths__
> 
> `keygen.short`: 
> 11 characters
> 
> `keygen.medium`: 
> 22 characters
> 
> ` keygen.long`: 
> 33 characters
> 
> `keygen.default`:
> Configurable (11 by default)
> __Default Length__
> 
> If `length` is not specified, keygen-advance will use `keygen.default` as length (11 characters by default), this default length is configurable with `keygen.setDefault(length)`

### Examples
```
const keygen = require('keygen-advance');

// Generate a 32 characters long string
keygen.gen(32) //-> %AAo7O4N1BQd<y80<?A4R§L7c$z$mqY#

// Generate a medium string (22 chars long) only using characters in the charsToUse array
var charsToUse = ['1','0'];
keygen.gen(keygen.medium,charsToUse) //-> 0010110011000100111101

// Generates a short URL-friendly key
keygen.url(keygen.short) //-> m7cBe7vYlFW

// Generate a long hexadecimal key
keygen.hex(keygen.long) //-> 266c76b68dc12e3b4cf1335cd091c9b6c

// Generate a SHA256 key
keygen.SHA256() // 7e0decae06b626bde327951b1099cc8abae4af515383a4c408f7255fdcfece95

// Generate a SHA512 key
keygen.SHA512() //-> A very long and spammy string trust me it works
```

## Options

All options are `true` by default, and only affect `gen()` and `url()`

Note: `allowSymbols` is `false` in `url()`

* `allowUpperCase(boolean)`

Allow uppercase characters to appear in key

* `allowLowerCase(boolean)`

Allow lowercase characters to appear in key

* `allowSymbols(boolean)`

Allow symbols to appear in key

* `allowNumbers(boolean)`

Allow numbers to appear in key

## Filter

Filter can be used to prevent certain phrases you don't want from appearing in the key, swear words for example.

* `disableFilter(boolean)`

Disable filter for `gen()` and `url()`

* `setFilter(array)`

Overrides the previous filter

## Customisations

* `setDefault(length)`

Change the default length

* `reset()`

Reset everything about this package

## Excluded Characters

Some characters like `/` might just break your code, luckily we got the `excluded list` characters (works in `url()` and `gen()`)

* `exclude(char or array)`

Prevent character(s) from appearing in the key (add character(s) to the `exclude list`)

* `allow(char or array)`

Allow excluded character(s) to appear in key (remove character(s) from the `excluded list`)

## Extra Characters

Opposite of the `excluded characters`, add extra possible characters to the key (works in `url()` and `gen()`)

If same character appear in both lists `excluded list` has higher priority (cause safety first)

* `add(char or array)`

Add extra character to appear in key (add character(s) to the `extra list`)

* `remove(char or array)`

Remove extra character that can appear in key (remove character(s) to the `extra list`)

## Get and Set

Functions to get and set list contents

* `getList()`

Returns `fullList`, aka the final list generated from all the characters and other lists

* `setList(array)`

Overrides `fullList`, recommend not use this because the list get reset by almost every functions, only work in `gen()`

* `getExcluded()`

Returns `excluded list`

* `setExcluded(array)`

Overrides `excluded list`

* `getExtra()`

Returns `extra list`

* `setExtra(array)`

Overrides `extra list`

## Bugs and Suggestions

Pull request or create issue on [GitHub](https://github.com/Siriusmart/keygen-advance) please thank you for using