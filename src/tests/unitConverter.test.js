import { convertUnit } from '../unitConverter.js'

describe('convertUnit', () => {
  test('1 stone to kilograms', () => {
    expect(convertUnit(1, 'stone', 'kg')).toBeCloseTo(6.3503)
  })

  test('1 ounce to grams', () => {
    expect(convertUnit(1, 'oz', 'g')).toBeCloseTo(28.3495)
  })

  test('1000 mg to grams', () => {
    expect(convertUnit(1000, 'mg', 'g')).toBe(1)
  })

  test('1000 g to kilograms', () => {
    expect(convertUnit(1000, 'g', 'kg')).toBe(1)
  })

  test('1 kg to pounds', () => {
    expect(convertUnit(1, 'kg', 'lb')).toBeCloseTo(2.20462)
  })

  test('0 to 0', () => {
    expect(convertUnit(0, 'kg', 'lb')).toBe(0)
  })

  test('If the value is invalid', () => {
    expect(() => convertUnit('RANDOMVALUE', 'g', 'kg')).toThrow('The value has to be a number!')
  })

  test('If it is invalid from unit', () => {
    expect(() => convertUnit(2000, 'RANDOMUNIT', 'kg')).toThrow('You are trying to use a invalid unit!')
  })

  test('If it is invalid to unit', () => {
    expect(() => convertUnit(2000, 'g', 'RANDOMUNIT')).toThrow('You are trying to use a invalid unit!')
  })

  test('Decimal test', () => {
    expect(convertUnit(2.5, 'kg', 'g')).toBe(2500)
  })
})
