import Decimal from 'decimal.js-light'

/**
 * @public
 * Parse argument to Decimal instance in a safe way
 * @param number
 * @returns {Decimal}
 */
export function numberToDecimalObj(number) {
  if (number instanceof Decimal) {
    return number
  }
  if (!number || isNaN(number)) {
    throw new Error('please input a Number, or a String of a number')
  }
  return new Decimal(number)
}

/**
 * @public
 * This function is alias for numberToDecimalObj
 * @type {numberToDecimalObj}
 */
export const n2d = numberToDecimalObj

/**
 * transform String/Number/Decimal to a fixed format
 *  1. minFixed <= decimal part length <= maxFixed
 *  2. decimal part will no keep 0 at the tail, unless decimal part length is small than minFixed
 * @public
 * @param {string | number | Decimal} number
 * @param minFixed default to be 2, it means 1.0 will be transformed to 1.00, but 1.000 will not be effected
 *        this param will keep 0 at the tail of number
 * @param maxFixed default to be 10, it means Math.fixed(10) and this param will no keep 0 at the tail of number,
 *        it means 1.11000 will transform to 1.11, bug 1.11111 will not be effected
 * @returns {string | string} number in format
 */
export function decimalToString(number, {minFixed = 2, maxFixed = 10} = {}) {
  let decimalObj = n2d(number)
  let decimalFixedStr = decimalObj.toFixed(maxFixed)
  let fixed = decimalFixedStr.replace(/^\d*\.?/, '').replace(/0*$/, '').length // 这是数字真实小数位数

  fixed = Math.max(minFixed, fixed)
  return decimalObj.toFixed(fixed)
}

/**
 * This function is alias for decimalToString
 * @public
 * @return {string} number in string format
 */
export const d2s = decimalToString

/**
 * This function is alias for decimalToString, just lik d2s
 * @public
 * @return {string} number in string format
 */
export const numberToString = decimalToString

/**
 * This function is alias for numberToString
 * @public
 * @return {string} number in string format
 */
export const n2s = numberToString

/**
 * this function receive multiple addends and return the sum in a Decimal Object
 * @public
 * @param {string | number | Decimal} num1 first addends is required
 * @param {string | number | Decimal} nums the other addends
 * @returns {Decimal} sum
 */
export function decimalPlus(num1, ...nums) {
  return nums.reduce((result, num) => result.plus(n2d(num)), n2d(num1))
}

/**
 * This function is similar as decimalPlus, bug return the sum in a string
 * @public
 * @param {string | number | Decimal} num1 first addends is required
 * @param {string | number | Decimal} nums the other addends
 * @returns {string} sum
 */
export function decimalPlusToString(num1, ...nums) {
  return d2s(decimalPlus(num1, ...nums))
}

/**
 * this function receive one minuend and multiple subtrahend and return the subtract output in a Decimal Object
 * @public
 * @param {string | number | Decimal} num1 first number is minuend, is required
 * @param {string | number | Decimal} nums the other subtrahend
 * @returns {Decimal} minuend
 */
export function decimalMinus(num1, ...nums) {
  return nums.reduce((result, num) => result.minus(n2d(num)), n2d(num1))
}

/**
 * This function is similar as decimalMinus, bug return the minuend in a string
 * @public
 * @param {string | number | Decimal} num1 first addends is required
 * @param {string | number | Decimal} nums the other subtrahend
 * @returns {string} minuend
 */
export function decimalMinusToString(num1, ...nums) {
  return d2s(decimalMinus(num1, ...nums))
}

/**
 * this function receive one multiplicand and multiple multiplier, return the product in a Decimal Object
 * @public
 * @param {string | number | Decimal} num1 first number is multiplicand, is required
 * @param {string | number | Decimal} nums the other multiplier
 * @returns {Decimal} the product in a Decimal Object
 */
export function decimalTimes(num1, ...nums) {
  return nums.reduce((result, num) => result.times(n2d(num)), n2d(num1))
}

/**
 * This function is similar as decimalTimes, bug return the product in a string
 * @public
 * @param {string | number | Decimal} num1 first multiplicand is required
 * @param {string | number | Decimal} nums the other multiplier
 * @returns {string} product
 */
export function decimalTimesToString(num1, ...nums) {
  return d2s(decimalTimes(num1, ...nums))
}

/**
 * this function receive one dividend and multiple divisor, return the product in a Decimal Object
 * @public
 * @param {string | number | Decimal} num1 first number is dividend, is required
 * @param {string | number | Decimal} nums the other divisor
 * @returns {Decimal} the dividend in a Decimal Object
 */
export function decimalDiv(num1, ...nums) {
  return nums.reduce((result, num) => result.div(n2d(num)), n2d(num1))
}

/**
 * This function is similar as decimalDiv, bug return the dividend in a string
 * @public
 * @param {string | number | Decimal} num1 first dividend is required
 * @param {string | number | Decimal} nums the other divisor
 * @returns {string} dividend
 */
export function decimalDivToString(num1, ...nums) {
  return d2s(decimalDiv(num1, ...nums))
}
