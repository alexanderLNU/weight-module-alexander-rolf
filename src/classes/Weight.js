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

  /**
   * This method checks if the weight is lighter than the other weight given as an argment.
   *
   * @param {Weight} otherWeight The other instance of weight that is going to be compared.
   * @returns {boolean}          True ifthe weight is lighter than the other weight otherwise it returns false.
   */
  isLighterThan (otherWeight) {
    if (!(otherWeight instanceof Weight)) {
      throw new Error('The argument must be an instance of Weight!')
    }

    const otherWeightInThisUnit = otherWeight.convert(this.weightUnit)
    return this.weight < otherWeightInThisUnit.weight
  }

  /**
   * This method checks if the weight is equal to the other weight given as an argument.
   *
   * @param {Weight} otherWeight The other instance of weight that is going to be compared.
   * @returns {boolean}          True if the weights are the same weight otherwise it returns false.
   */
  hasSameWeightAs (otherWeight) {
    if (!(otherWeight instanceof Weight)) {
      throw new Error('The argument must be an instance of Weight!')
    }

    const otherWeightInThisUnit = otherWeight.convert(this.weightUnit)
    return this.weight === otherWeightInThisUnit.weight
  }

  /**
   * This method checks if the weight is heavier than the other weight given as an argument.
   *
   * @param {Weight} otherWeight The other instance of weight that is going to be compared.
   * @returns {boolean}          True if this weight is heavier than the other weight otherwise it returns false.
   */
  isHeavierThan (otherWeight) {
    if (!(otherWeight instanceof Weight)) {
      throw new Error('The argument must be an instance of Weight!')
    }

    const otherWeightInThisUnit = otherWeight.convert(this.weightUnit)
    return this.weight > otherWeightInThisUnit.weight
  }

  /**
   * This method creates a new instance of Weight from the userInput string
   * and it also throws error if it is in a wrong format or a non-valid unit.
   *
   * @param {string} userInput The string that is going to be parsed for example '1 kg'.
   * @returns {Weight}         A new instance of Weight with the userInput weight and unit.
   */
  static fromTextInput (userInput) {
    if (typeof userInput !== 'string') {
      throw new Error('Input must be a string!')
    }

    const regexRule = /^(-?\d+(?:\.\d+)?)\s*(\w+)$/
    const inputTrimmed = userInput.trim() // For spaces
    const inputFixed = inputTrimmed.replace(/,/g, '.') // commas to dots
    const checkIfMatch = inputFixed.match(regexRule)

    if (!checkIfMatch) {
      throw new Error('Input must first be a number, then followed by a unit!')
    }

    // First number, then unit
    const weight = parseFloat(checkIfMatch[1])
    const weightUnit = checkIfMatch[2]

    if (!unitValidator(weightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }
    // Actually creating the new instance of Weight with the parsed values from userInput.
    return new Weight(weight, weightUnit)
  }
}
