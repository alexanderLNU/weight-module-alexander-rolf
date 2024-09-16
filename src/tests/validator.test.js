import { unitValidator } from '../validator.js'

// Testing so that the validator works as intended, return true if the unit is valid, otherwise return false.
test('unitValidator is supposed to return true if the unit is valid', () => {
  expect(unitValidator('g')).toBe(true)
  expect(unitValidator('kg')).toBe(true)
  expect(unitValidator('mg')).toBe(true)
  expect(unitValidator('lb')).toBe(true)
})

test('unitValidator is supposed to return false if the unit is invalid', () => {
  expect(unitValidator('WRONG')).toBe(false)
  expect(unitValidator('')).toBe(false)
  expect(unitValidator('mm')).toBe(false)
  expect(unitValidator('km')).toBe(false)
})