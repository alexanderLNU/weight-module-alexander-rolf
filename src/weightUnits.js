// Define weight units and also their conversion to g (grams).
const weightUnits = Object.freeze({
  g: 1,
  kg: 1000,
  mg: 0.001,
  lb: 453.592,
  stone: 6350.29,
  oz: 28.3495
})

/**
 * A function that returns the weightUnits object.
 *
 * @returns {object} weightUnits object.
 */
export function getWeightUnits () {
  return weightUnits
}
