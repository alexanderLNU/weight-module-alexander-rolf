import { getWeightUnits } from './weightUnits.js'
import { unitValidator } from './validator.js'

/**
 * This function converts a value from a given unit to another unit.
 *
 * @param {number} weight        The value that is goign to be converted.
 * @param {string} from          Unit that we convert from.
 * @param {string} to            Unit that we convert to.
 * @returns {number}             The converted value.
 */
export function convertUnit (weight, from, to) {
  const weightUnits = getWeightUnits()
  // Check that value is of the type number and that it is not NaN since that is a number itself.
  if (typeof weight !== 'number' || isNaN(weight)) {
    throw new Error('The value has to be a number!')
  }

  if (!unitValidator(from) || !unitValidator(to)) {
    throw new Error('You are trying to use a invalid unit!')
  }

  const inGrams = weight * weightUnits[from]
  const goalUnit = inGrams / weightUnits[to]

  return goalUnit
}
