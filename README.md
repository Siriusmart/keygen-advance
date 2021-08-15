#What is this?

Generate a random string with advance customisation

#Installation

`npm i keygen-advance`

Then...
```
const keygen = require(keygen-advance)
```

##Source

[GitHub](https://github.com/Siriusmart/keygen-advance)

##Options

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

* `keygen.enableFilter(boolean)`

Enable/disable a filter to prevent random string from including any word from the `filter` array (will get to that in a moment) from generating.