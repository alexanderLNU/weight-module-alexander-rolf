import { unitValidator } from '../validator.js'
import Weight from './Weight.js'

/**
 * This class manages a collection of Weight instances.
 */
export default class WeightManager {
  /**
   * Constructor creates a neww instance of WeightManager.
   */
  constructor () {
    this.weights = []
  }

  /**
   * This method removes a Weitght instance from collection.
   *
   * @param {Weight} weight The instance of Weight that is going to be removed.
   * @returns {boolean}     Returns true if the weight was dound and removed, otherwise returning false.
   */
  removeWeight (weight) {
    const i = this.weights.indexOf(weight)
    if (i !== -1) { // Is wiehgt in collection? if its not -1 it is there.
      this.weights.splice(i, 1)
      return true
    }
    return false
  }

  /**
   * This method adds a instance of Weight to the collection.
   *
   * @param {Weight} weight The instance of Weight that is going to be added to the collection.
   */
  addWeight (weight) {
    if (!(weight instanceof Weight)) {
      throw new Error('The argument has to be an instance of Weight!')
    }
    this.weights.push(weight)
  }

  /**
   * This method returns the number of weights in the collection.
   *
   * @returns {number} How many weights there are in the collection.
   */
  numberOfWeights () {
    return this.weights.length
  }

  /**
   * This method returns total weight of all weights in the manager and conerts it to wanted unit.
   *
   * @param {string} weightUnit Unit that we want the total weight to be, grams is set by default.
   * @returns {Weight}          A new instance of Weight with the total weight and wanted unit.
   */
  getTotalWeight (weightUnit = 'g') {
    if (!unitValidator(weightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }

    // Convert all weights we have to grams and sum them up.
    let sumOfWeightsInGrams = 0
    for (const weight of this.weights) {
      const weightAsGrams = weight.convert('g').weight
      sumOfWeightsInGrams += weightAsGrams
    }

    // Convert total weight to wanted unit.
    const totalWeightInWantedUnit = new Weight(sumOfWeightsInGrams, 'g').convert(weightUnit)
    return totalWeightInWantedUnit
  }
}
