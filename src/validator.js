import { getWeightUnits } from './weightUnits.js'

/**
 * Check if unit is a valid weight unit.
 *
 * @param {string} unit The unit that needs to be validated.
 * @returns {boolean}   Returns true if unit is a valid weight unit, otherwise returns false.
 */
export function unitValidator (unit) {
  const weightUnits = getWeightUnits()
  return Object.prototype.hasOwnProperty.call(weightUnits, unit)
}
