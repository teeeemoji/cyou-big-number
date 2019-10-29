/**
 * Summary.
 *  main test file.
 *
 * Description
 *  This is the main test file
 *
 * @file   This main test file for class cyou-big-number.
 * @author teeeemoji.
 * @since 2019-10-21
 */
import {
  n2s,
  decimalPlus,
  decimalPlusToString,
  decimalMinus,
  decimalMinusToString,
  decimalTimes,
  decimalTimesToString,
  decimalDiv,
  decimalDivToString
} from '../src'

describe('Number format', function () {
  test('digitizer accuracy from 10^20 to 10^-10', function () {
    expect(
      n2s('9e-10')
    ).toBe('0.0000000009')

    expect(
      n2s(9e-10)
    ).toBe('0.0000000009')

    expect(
      n2s('123456789012345678790.12345678901234567890')
    ).toBe('123456789012345678790.123456789')

    expect(
      n2s('99999999999999999999.9999999999')
    ).toBe('99999999999999999999.9999999999')

    expect(
      n2s(0.99, {maxFixed: 0, minFixed: 0})
    ).toBe('1')

    expect(
      n2s('9999999999.999999999', {maxFixed: 2})
    ).toBe('10000000000.00')
  })
})

describe('decimalPlus', function () {
  test('1 + 2 + 3 + 4 === 10', function () {
    expect(
      n2s(
        decimalPlus(1, 2, 3, 4),
        {minFixed: 0}
      )
    ).toBe('10')
  })
  test('0.1 + 0.2 === 0.3', function () {
    expect(
      n2s(decimalPlus(0.1, 0.2),
        {minFixed: 0}
      )
    ).toBe('0.3')
  })

})
describe('decimalPlusToString', function () {
  test('1 + 2 + 3 + 4 === 10', function () {
    expect(
      decimalPlusToString(1, 2, 3, 4)
    ).toBe('10.00')
  })
  test('0.1 + 0.2 === 0.3', function () {
    expect(
      decimalPlusToString(0.1, 0.2)
    ).toBe('0.30')
  })
})

describe('decimalMinus', function () {
  test('1234567890.1234567890 - 1000000000.000000009 - 200000000.00000008 - 30000000.0000007 === 4567890.123456', function () {
    expect(
      n2s(
        decimalMinus('1234567890.1234567890', '1000000000.000000009', '200000000.00000008', '30000000.0000007'),
        {minFixed: 0}
      )
    ).toBe('4567890.123456')
  })
  test('0.4 - 0.1 === 0.3', function () {
    expect(
      n2s(
        decimalMinus(0.4, 0.1),
        {minFixed: 0}
      )
    ).toBe('0.3')
  })
})

describe('decimalMinusToString', function () {
  test('1234567890.1234567890 - 1000000000.000000009 - 200000000.00000008 - 30000000.0000007 === 4567890.123456', function () {
    expect(
      decimalMinusToString('1234567890.1234567890', '1000000000.000000009', '200000000.00000008', '30000000.0000007')
    ).toBe('4567890.123456')
  })
  test('0.4 - 0.1 === 0.3', function () {
    expect(
      decimalMinusToString(0.4, 0.1)
    ).toBe('0.30')
  })
})

describe('decimalTimes', function () {
  test('0.0000000001 * 10000000000 * 2 * 3 === 6', function () {
    expect(
      n2s(
        decimalTimes('0.0000000001', '10000000000', 2, 3),
        {minFixed: 0}
      )
    ).toBe('6')
  })
  test('Number.MAX_SAFE_INTEGER * 10 === 90071992547409910', function () {
    expect(
      n2s(
        decimalTimes(Number.MAX_SAFE_INTEGER, 10),
        {minFixed: 0}
      )
    ).toBe('90071992547409910')
  })
})


describe('decimalTimesToString', function () {
  test('0.0000000001 * 10000000000 * 2 * 3 === 6', function () {
    expect(
      decimalTimesToString('0.0000000001', '10000000000', 2, 3)
    ).toBe('6.00')
  })
  test('Number.MAX_SAFE_INTEGER * 10 === 90071992547409910', function () {
    expect(
      decimalTimesToString(Number.MAX_SAFE_INTEGER, 10)
    ).toBe('90071992547409910.00')
  })
})


describe('decimalDiv', function () {
  test('1000 / 1000 / 1000 / 1000 = 0.000001', function () {
    expect(
      n2s(
        decimalDiv(1000, 1000, 1000, 1000),
        {minFixed: 0}
      )
    ).toBe('0.000001')
  })
  test('99999999999999999999.9999999999 / 33333333333333333333.3333333333 / 2 = 1.5', function () {
    expect(
      n2s(
        decimalDiv('99999999999999999999.9999999999', '33333333333333333333.3333333333', 2),
        {minFixed: 0}
      )
    ).toBe('1.5')
  })
})

describe('decimalDivToString', function () {
  test('1000 / 1000 / 1000 / 1000 = 0.000001', function () {
    expect(
      decimalDivToString(1000, 1000, 1000, 1000)
    ).toBe('0.000001')
  })
  test('99999999999999999999.9999999999 / 33333333333333333333.3333333333 / 2 = 1.5', function () {
    expect(
      decimalDivToString('99999999999999999999.9999999999', '33333333333333333333.3333333333', 2)
    ).toBe('1.50')
  })
})



