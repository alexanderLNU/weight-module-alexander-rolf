import { unitValidator } from '../validator.js'
import { convertUnit } from '../unitConverter.js'

/**
 * This class represents a weight with a given unit.
 */
export default class Weight {
  /**
   * Creates a new instance of Weight.
   *
   * @param {number} weight    The weight value.
   * @param {string} weightUnit The unit of the weight.
   */
  constructor (weight, weightUnit) {
    if (typeof weight !== 'number' || isNaN(weight)) {
      throw new Error('The weight has to be a number!')
    }

    if (!unitValidator(weightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }

    this.weight = weight
    this.weightUnit = weightUnit
  }

  /**
   * Convert the weight to a new unit.
   *
   * @param {string} newWeightUnit  The new unit that the weight should be converted to.
   * @returns {Weight}              New instance of Weight with the converted weight and unit.
   */
  convert (newWeightUnit) {
    if (!unitValidator(newWeightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }

    const newWeight = convertUnit(this.weight, this.weightUnit, newWeightUnit)
    return new Weight(newWeight, newWeightUnit)
  }
}
