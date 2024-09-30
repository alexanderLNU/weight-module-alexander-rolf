import Weight from '../classes/Weight.js'
import WeightManager from '../classes/WeightManager.js'

describe('WeightManager', () => {
  test('Remove weight instance from collection', () => {
    const weightManager = new WeightManager()
    const weight = new Weight(5000, 'g')
    weightManager.addWeight(weight)
    const removedWeight = weightManager.removeWeight(weight)
    expect(removedWeight).toBe(true)
  })

  test('The removeWeight method should return false if the weight is not present', () => {
    const weightManager = new WeightManager()
    const weight = new Weight(5000, 'g')
    const removedWeight = weightManager.removeWeight(weight)
    expect(removedWeight).toBe(false)
  })

  test('Add weight instance from collection', () => {
    const weightManager = new WeightManager()
    const weight = new Weight(5000, 'g')
    weightManager.addWeight(weight)
    expect(weightManager.weights).toContain(weight)
    expect(weightManager.numberOfWeights()).toBe(1)
  })

  test('The addWeight method should throw error if your trying to add a non-weight instance', () => {
    const weightManager = new WeightManager()
    expect(() => weightManager.addWeight('WRONG')).toThrow('The argument has to be an instance of Weight!')
  })

  test('The method numberOfWeights returns correct amount of weights whjen they are added', () => {
    const weightManager = new WeightManager()
    expect(weightManager.numberOfWeights()).toBe(0)
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    weightManager.addWeight(weight1)
    weightManager.addWeight(weight2)
    expect(weightManager.numberOfWeights()).toBe(2)
  })

  test('The method numberOfWeights removes correct amount of weights when they are removed', () => {
    const weightManager = new WeightManager()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    weightManager.addWeight(weight1)
    weightManager.addWeight(weight2)
    weightManager.removeWeight(weight1)
    expect(weightManager.numberOfWeights()).toBe(1)
  })

  test('The method numberOfWeights return no weights when it is empty', () => {
    const weightManager = new WeightManager()
    expect(weightManager.numberOfWeights()).toBe(0)
  })

  test('The method getTotalWeight returns the total weuight of all weights', () => {
    const weightManager = new WeightManager()
    weightManager.addWeight(new Weight(5000, 'g'))
    weightManager.addWeight(new Weight(1, 'kg'))
    const weight = weightManager.getTotalWeight()
    expect(weight.weight).toBe(6000)
    expect(weight.weightUnit).toBe('g')
  })

  test('The method getTotalWeight should give the total weuight in a specific wanted unit', () => {
    const weightManager = new WeightManager()
    weightManager.addWeight(new Weight(5000, 'g'))
    weightManager.addWeight(new Weight(1, 'kg'))
    weightManager.addWeight(new Weight(20, 'lb'))
    const weight = weightManager.getTotalWeight('kg')
    const TotalKgShouldBe = (5000 + 1000 + 9071.8474) / 1000
    expect(weight.weight).toBeCloseTo(TotalKgShouldBe)
    expect(weight.weightUnit).toBe('kg')
  })
})