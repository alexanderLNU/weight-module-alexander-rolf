import { unitValidator } from '../validator.js'
import Weight from './Weight.js'

/**
 * This class manages a collection of Weight instances.
 */
export default class WeightCollection {
  /**
   * Constructor creates a neww instance of WeightCollection.
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
  removeWeightFromCollection (weight) {
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
  addWeightToCollection (weight) {
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
   * This method returns total weight of all weights in the collection in the wanted unit.
   *
   * @param {string} weightUnit Unit that the total weight should be in, grams is the default set unit.
   * @returns {Weight}          A new instance of Weight with the total weight in wanted unit.
   */
  getTotalWeight (weightUnit = 'g') {
    this.validateWeightUnit(weightUnit)
    const totalWeightInGrams = this.addUpAllWeightsInGrams()
    return this.convertTotalWeightToWantedUnit(totalWeightInGrams, weightUnit)
  }

  /**
   * This method checks if the written unit is a valid weight unit.
   *
   * @param {string} weightUnit The weight unit that is going to be validated.
   */
  validateWeightUnit (weightUnit) {
    if (!unitValidator(weightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }
  }

  /**
   * This method adds up all the weights that is in the collection to get the total weight in grams.
   *
   * @returns {number} The total weight of all the weights in the collection in grams.
   */
  addUpAllWeightsInGrams () {
    return this.weights.reduce((sum, weight) => { return sum + weight.convert('g').weight }, 0)
  }

  /**
   * THis method converts the total weight in grams to the wanted unit.
   *
   * @param {number} totalWeightInGrams Total weight in grams that will be converted to wanted unit.
   * @param {string} weightUnit         The unit that total weight should be in.
   * @returns {Weight}                  A new instance of Weight with the total weight in wanted unit.
   */
  convertTotalWeightToWantedUnit (totalWeightInGrams, weightUnit) {
    return new Weight(totalWeightInGrams, 'g').convert(weightUnit)
  }

  /**
   * This method returns avg weight of all the instances of Weight in the collection.
   *
   * @param {string} weightUnit Unit to return avg weight in, grams is the default set unit.
   * @returns {Weight}          A new instance of Weight with the average weight and wanted unit.
   */
  getAverageWeight (weightUnit = 'g') {
    if (this.weights.length === 0) {
      throw new Error('There are no weights in the collection!')
    }
    if (!unitValidator(weightUnit)) {
      throw new Error('You are trying to use a invalid unit!')
    }

    // Get sum in grams
    const totalWeight = this.getTotalWeight('g').weight
    const avgWeight = totalWeight / this.weights.length

    // Convert avg weight to wanted unit
    const avgWeightInWantedUnit = new Weight(avgWeight, 'g').convert(weightUnit)
    return avgWeightInWantedUnit
  }

  /**
   * This method returns the heaviest instance of Weight in the collection.
   *
   * @returns {Weight} Returns the heaviest instance of Weight in the collection.
   */
  getHeaviestWeight () {
    if (this.weights.length === 0) {
      throw new Error('There are no weights in the collection!')
    }

    let heaviestWeight = this.weights[0]
    // Update when a heavier weight is found
    for (const weight of this.weights) {
      if (weight.isHeavierThan(heaviestWeight)) {
        heaviestWeight = weight
      }
    }
    return heaviestWeight
  }

  /**
   * This method returns the lightest instance of Weight in the collection.
   *
   * @returns {Weight} Returns the lightest instance of Weight in the collection.
   */
  getLightestWeight () {
    if (this.weights.length === 0) {
      throw new Error('There are no weights in the collection!')
    }

    let lightestWeight = this.weights[0]
    // Update when a lighter weight is found
    for (const weight of this.weights) {
      if (weight.isLighterThan(lightestWeight)) {
        lightestWeight = weight
      }
    }
    return lightestWeight
  }

  /**
   * This method merges the weights in the other instance WeightCollection to this instance of WeightCollection.
   * THis enables using different batches of weights together for different purposes.
   *
   * @param {WeightCollection} otherWeightCollection Another WeightCollection instance that we want to merge with this instance.
   */
  mergeManagersData (otherWeightCollection) {
    if (!(otherWeightCollection instanceof WeightCollection)) {
      throw new Error('The argument has to be a instance of WeightCollection!')
    }
    otherWeightCollection.weights.forEach(weight => this.addWeightToCollection(weight))
  }

  /**
   * This method erases all the weights in the manager/collection.
   */
  eraseAllWeights () {
    this.weights = []
  }
}
