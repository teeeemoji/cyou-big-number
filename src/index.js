import Decimal from 'decimal.js-light'

// parse number or string to a DecimalObject
export function numberToDecimalObj(number) {
  if (number instanceof Decimal) {
    return number
  }
  if (!number || isNaN(number)) {
    number = 0
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
export function decimalToString(number, options = {minFixed: 2, maxFixed: 10}) {
  let decimalObj = n2d(number)
  let decimalFixedStr = decimalObj.toFixed(options.maxFixed)
  let fixed = decimalFixedStr.replace(/^\d*\./, '').replace(/0*$/, '').length // 这是数字真实小数位数

  fixed = Math.max(options.minFixed, fixed)
  return decimalObj.toFixed(fixed)
}

export const d2s = decimalToString
// 加
export function decimalPlus(num1, ...nums) {
  return nums.reduce((result, num) => result.plus(n2d(num)), n2d(num1))
}
// 减
export function decimalMinus(num1, ...nums) {
  return nums.reduce((result, num) => result.minus(n2d(num)), n2d(num1))
}
// 乘
export function decimalTimes(num1, ...nums) {
  return nums.reduce((result, num) => result.times(n2d(num)), n2d(num1))
}
// 除
export function decimalDiv(num1, ...nums) {
  return nums.reduce((result, num) => result.div(n2d(num)), n2d(num1))
}
