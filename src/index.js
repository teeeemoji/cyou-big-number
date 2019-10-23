import Decimal from 'decimal.js-light'

// parse number or string to a DecimalObject
export function numberToDecimalObj(number) {
  if (number instanceof Decimal) {
    return number
  }
  if (!number || isNaN(number)) {
    throw new Error('please input a Number, or a String of a number')
  }
  return new Decimal(number)
}

// short for numberToDecimalObj
export const n2d = numberToDecimalObj

/**
 *  big decimal format to string
 * @param number
 * @param options 设置最大&最小 保留小数位
 * @returns string
 */
export function decimalToString(number, {minFixed = 2, maxFixed = 10} = {}) {
  let decimalObj = n2d(number)
  let decimalFixedStr = decimalObj.toFixed(maxFixed)
  let fixed = decimalFixedStr.replace(/^\d*\.?/, '').replace(/0*$/, '').length // 这是数字真实小数位数

  fixed = Math.max(minFixed, fixed)
  return decimalObj.toFixed(fixed)
}

export const d2s = decimalToString

export function numberToString(number, {minFixed = 2, maxFixed = 10} = {}) {
  return d2s(n2d(number), {minFixed, maxFixed})
}

export const n2s = numberToString

// 加, 返回 decimal 对象
export function decimalPlus(num1, ...nums) {
  return nums.reduce((result, num) => result.plus(n2d(num)), n2d(num1))
}

// 加, 返回字符串
export function decimalPlusToString(num1, ...nums) {
  return d2s(decimalPlus(num1, ...nums))
}

// 减, 返回 decimal 对象
export function decimalMinus(num1, ...nums) {
  return nums.reduce((result, num) => result.minus(n2d(num)), n2d(num1))
}

// 减, 返回字符串
export function decimalMinusToString(num1, ...nums) {
  return d2s(decimalMinus(num1, ...nums))
}

// 乘, 返回 decimal 对象
export function decimalTimes(num1, ...nums) {
  return nums.reduce((result, num) => result.times(n2d(num)), n2d(num1))
}

// 乘, 返回字符串
export function decimalTimesToString(num1, ...nums) {
  return d2s(decimalTimes(num1, ...nums))
}

// 除, 返回 decimal 对象
export function decimalDiv(num1, ...nums) {
  return nums.reduce((result, num) => result.div(n2d(num)), n2d(num1))
}

// 除, 返回字符串
export function decimalDivToString(num1, ...nums) {
  return d2s(decimalDiv(num1, ...nums))
}
