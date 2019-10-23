# cyou-big-number

![NPM](https://img.shields.io/npm/l/cyou-big-number)
![npm](https://img.shields.io/npm/v/cyou-big-number)
![npm](https://img.shields.io/npm/dy/cyou-big-number)

This package is based on [decimal.js-light](https://www.npmjs.com/package/decimal.js-light) and offer some very simple API for **big decimal**.

-   number | string transform to decimal
-   decimal to fixed format
-   decimal arithmetic add/subtract/multiply/divide

Now, see you big number.

## Installation

```console
$ npm install cyou-big-number --save
```

## Usage

Example:

```javascript
// Supports at least 20 integers to 10 decimals
n2s('123456789012345678790.12345678901234567890'); // 123456789012345678790.123456789

n2s('9e-10'); // 0.0000000009

n2s(9e-10); // 0.0000000009

// helpful format
n2s('1.12345000000000'); // 1.12345

// No loss of accuracy
n2s(decimalPlus(0.1, 0.2)); // 0.30
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### numberToDecimalObj

[src/index.js:9-17](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L9-L17 "Source code on GitHub")

#### Parameters

-   `number`  

Returns **Decimal** 

### n2d

[src/index.js:24-24](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L24-L24 "Source code on GitHub")

Type: [numberToDecimalObj](#numbertodecimalobj)

### decimalToString

[src/index.js:38-45](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L38-L45 "Source code on GitHub")

transform String/Number/Decimal to a fixed format
 1\. minFixed &lt;= decimal part length &lt;= maxFixed
 2\. decimal part will no keep 0 at the tail, unless decimal part length is small than minFixed

#### Parameters

-   `number` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** 
-   `$1` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `$1.minFixed`   (optional, default `2`)
    -   `$1.maxFixed`   (optional, default `10`)
-   `minFixed`  default to be 2, it means 1.0 will be transformed to 1.00, but 1.000 will not be effected
           this param will keep 0 at the tail of number
-   `maxFixed`  default to be 10, it means Math.fixed(10) and this param will no keep 0 at the tail of number,
           it means 1.11000 will transform to 1.11, bug 1.11111 will not be effected

Returns **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** number in format

### d2s

[src/index.js:52-52](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L52-L52 "Source code on GitHub")

This function is alias for decimalToString

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** number in string format

### numberToString

[src/index.js:59-59](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L59-L59 "Source code on GitHub")

This function is alias for decimalToString, just lik d2s

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** number in string format

### n2s

[src/index.js:66-66](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L66-L66 "Source code on GitHub")

This function is alias for numberToString

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** number in string format

### decimalPlus

[src/index.js:75-77](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L75-L77 "Source code on GitHub")

this function receive multiple addends and return the sum in a Decimal Object

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first addends is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other addends

Returns **Decimal** sum

### decimalPlusToString

[src/index.js:86-88](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L86-L88 "Source code on GitHub")

This function is similar as decimalPlus, bug return the sum in a string

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first addends is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other addends

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** sum

### decimalMinus

[src/index.js:97-99](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L97-L99 "Source code on GitHub")

this function receive one minuend and multiple subtrahend and return the subtract output in a Decimal Object

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first number is minuend, is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other subtrahend

Returns **Decimal** minuend

### decimalMinusToString

[src/index.js:108-110](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L108-L110 "Source code on GitHub")

This function is similar as decimalMinus, bug return the minuend in a string

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first addends is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other subtrahend

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** minuend

### decimalTimes

[src/index.js:119-121](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L119-L121 "Source code on GitHub")

this function receive one multiplicand and multiple multiplier, return the product in a Decimal Object

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first number is multiplicand, is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other multiplier

Returns **Decimal** the product in a Decimal Object

### decimalTimesToString

[src/index.js:130-132](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L130-L132 "Source code on GitHub")

This function is similar as decimalTimes, bug return the product in a string

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first multiplicand is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other multiplier

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** product

### decimalDiv

[src/index.js:141-143](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L141-L143 "Source code on GitHub")

this function receive one dividend and multiple divisor, return the product in a Decimal Object

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first number is dividend, is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other divisor

Returns **Decimal** the dividend in a Decimal Object

### decimalDivToString

[src/index.js:152-154](https://git@github.com/:teeeemoji/cyou-big-number/blob/e8011f3cd79904e3ee7cd254d9de4ac45356d54f/src/index.js#L152-L154 "Source code on GitHub")

This function is similar as decimalDiv, bug return the dividend in a string

#### Parameters

-   `num1` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** first dividend is required
-   `nums` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | Decimal)** the other divisor

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dividend

## Related

-   [plop][plop] - Consistency Made Simple

## License

This project is licensed under the [MIT license](LICENSE).

[plop]: https://github.com/amwmedia/plop
