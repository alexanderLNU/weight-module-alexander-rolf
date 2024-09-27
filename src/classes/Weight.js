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

  /**
   * This method adds another instance of Weight to this instance.
   *
   * @param {Weight} otherWeight The other instance of Weight that should be added to this instance.
   * @returns {Weight}           New instance of Weight with the total sum of the two weights.
   */
  add (otherWeight) {
    if (!(otherWeight instanceof Weight)) {
      throw new Error('The argument has to be an instance of Weight!')
    }

    const otherWeightInThisUnit = otherWeight.convert(this.weightUnit)
    const totalWeight = this.weight + otherWeightInThisUnit.weight

    return new Weight(totalWeight, this.weightUnit)
  }

  /**
   * This method subtracts another instance of Weight from this instance.
   *
   * @param {Weight} otherWeight The other instance of Weight that should be subtracted from this instance.
   * @returns {Weight}           New instance of Weight with the subtracted weight.
   */
  subtract (otherWeight) {
    if (!(otherWeight instanceof Weight)) {
      throw new Error('The argument has to be an instance of Weight!')
    }

    const otherWeightInThisUnit = otherWeight.convert(this.weightUnit)
    const subtractedWeight = this.weight - otherWeightInThisUnit.weight

    return new Weight(subtractedWeight, this.weightUnit)
  }

  /**
   * Method returns a string with the weight and unit.
   *
   * @returns {string} A strign with the weight and unit.
   */
  toString () {
    return `${this.weight} ${this.weightUnit}`
  }

  /**
   * This method divides the weight with a given number.
   *
   * @param {number} number The number that the weight should be divided by.
   * @returns {Weight}      A new instance of weight with the result of the division.
   */
  divide (number) {
    if (number === 0) {
      throw new Error('It is not valid to divide by zero!')
    }

    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('The number has to be a number!')
    }

    const newWeight = this.weight / number
    return new Weight(newWeight, this.weightUnit)
  }

  /**
   * This method multiplies the weight with a given number.
   *
   * @param {number} number The number that the weight should be multiplied with.
   * @returns {Weight}      A new instance of weight with the result of the multiplication.
   */
  multiply (number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('The number has to be a number!')
    }

    const newWeight = this.weight * number
    return new Weight(newWeight, this.weightUnit)
  }
}
