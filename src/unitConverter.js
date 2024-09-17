import weightUnits from './weightUnits.js'
import { unitValidator } from './validator.js'

/**
 * This function converts a value from a given unit to another unit.
 *
 * @param {number} value        The value that is goign to be converted.
 * @param {string} from         Unit that we convert from.
 * @param {string} to           Unit that we convert to.
 * @returns {number}            The converted value.
 */
export function convertUnit (value, from, to) {
  // Check that value is of the type number and that it is not NaN since that is a number itself.
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('The value has to be a number!')
  }

  if (!unitValidator(from) || !unitValidator(to)) {
    throw new Error('You are trying to use a invalid unit!')
  }

  const inGrams = value * weightUnits[from]
  const goalUnit = inGrams / weightUnits[to]

  return goalUnit
}
