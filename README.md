# What is this?

Generate a random string with advance customisation

# Installation
If you for some reason haven't initialize your project yet, do it
```
npm init -y
```
Now install the package
```
npm i keygen-advance
```
Now make a const
```
const keygen = require(keygen-advance)
```

Source: [GitHub](https://github.com/Siriusmart/keygen-advance)

## Options

keygen-advance allows you to customise the string generated.

All options in this sections are `true` by default

* `keygen.allowUpperCase(boolean)`

Allow uppercase alphabets in the randomised string

* `keygen.allowLowerCase(boolean)`

Allow lowercase alphabets in the randomised string

* `keygen.allowNumbers(boolean)`

Allow numbers in the randomised string

* `keygen.allowSymbols(boolean)`

Allow symbols in the randomised string

* `keygen.logErrors(boolean)`

Log errors (Warning: if this is disabled, no errors would be generated from this package)

* `keygen.disableFilter(boolean)`

Enable/disable a filter to prevent random string from including any word from the `filter` array (will get to that in a moment) from generating.

## Basics
* `keygen.gen(length)`

Generate a random string with specified length

* `keygen.reset()`

Reset all settings, useful if you think you messed up some settings, this function will also clear all content in lists (will get to that in a moment)

## Lists

This is a brief explanation on what the lists do, and some functions to view/modidfy the lists

### Character List

This list contains all the characters that can be used in generating the random string

#### Functions

* `keygen.getList()`

This will return the character list as an array

* `keygen.setList(array)`

This will override the `character list`

### Excluded List

Characters in this list will be removed from the `character list`, therefore not appearing in the randomised string, add characters that will break your code here

This list overrides the `extras list` since, you know. Safety first

#### Functions

* `keygen.exclude(string or array)`

Add character(s) to the `excluded list`

* `keygen.allow(string or array)`

Remove characters from the `excluded list`

* `keygen.getExcluded()`

This will retuen the `excluded list`

* `keygen.setExcluded(array)`

This will override the `excluded list`

### Extras List

This list is the opposite of the `excluded list`, this list will add extra characters to the `character list`

Warning: This is can be override by the `excluded list`

#### Functions

* `keygen.add(string or array)`

Add character(s) to the `extras list`

* `keygen.remove(string or array)`

Remove characters from the `extras list`

* `keygen.getExtra()`

This will retuen the `extra list`

* `keygen.setExtra(array)`

This will override the `extras list`