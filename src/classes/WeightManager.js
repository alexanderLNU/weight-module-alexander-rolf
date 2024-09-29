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
}
