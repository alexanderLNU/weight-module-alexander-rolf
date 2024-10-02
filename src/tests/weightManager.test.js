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

  test('The method getAverageWeight should return average weight in the DEFAULT unit when we do not specify', () => {
    const weightManager = new WeightManager()
    weightManager.addWeight(new Weight(5000, 'g'))
    weightManager.addWeight(new Weight(6000, 'g'))
    const avgWeight = weightManager.getAverageWeight()
    const avgWeightShouldBe = (5000 + 6000) / 2
    expect(avgWeight.weight).toBe(avgWeightShouldBe)
    expect(avgWeight.weightUnit).toBe('g')
  })

  test('The method getAverageWeight should return average weight in the wanted unit that is being chosen/specified', () => {
    const weightManager = new WeightManager()
    weightManager.addWeight(new Weight(5, 'kg'))
    weightManager.addWeight(new Weight(6000, 'g'))
    const avgWeight = weightManager.getAverageWeight('kg')
    const avgWeightShouldBe = (5 + 6) / 2
    expect(avgWeight.weight).toBe(avgWeightShouldBe)
    expect(avgWeight.weightUnit).toBe('kg')
  })

  test('The method getHeaviestWeight should return the heaviest weight in the collection', () => {
    const weightManager = new WeightManager()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    const weight3 = new Weight(20, 'lb')
    const weight4 = new Weight(100, 'kg')
    weightManager.addWeight(weight1)
    weightManager.addWeight(weight2)
    weightManager.addWeight(weight3)
    weightManager.addWeight(weight4)
    const heaviestWeight = weightManager.getHeaviestWeight()
    expect(heaviestWeight).toBe(weight4)
  })

  test('The method getLightestWeight should return the lightest weight in the collection', () => {
    const weightManager = new WeightManager()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    const weight3 = new Weight(20, 'lb')
    const weight4 = new Weight(100, 'kg')
    weightManager.addWeight(weight1)
    weightManager.addWeight(weight2)
    weightManager.addWeight(weight3)
    weightManager.addWeight(weight4)
    const lightestWeight = weightManager.getLightestWeight()
    expect(lightestWeight).toBe(weight2)
  })

  test('The method mergeManagersData should merge the weights correctly', () => {
    const weightManager1 = new WeightManager()
    const weightManager2 = new WeightManager()
    const weight1 = new Weight(1, 'kg')
    const weight2 = new Weight(5, 'kg')
    const weight3 = new Weight(10, 'kg')
    weightManager1.addWeight(weight1)
    weightManager1.addWeight(weight2)
    weightManager2.addWeight(weight3)
    weightManager1.mergeManagersData(weightManager2) // Merge it
    expect(weightManager1.weights).toContain(weight1)
    expect(weightManager1.weights).toContain(weight2)
    expect(weightManager1.weights).toContain(weight3)
    expect(weightManager1.numberOfWeights()).toBe(3)
  })

  test('The method eraseALlWeights should properly erase all weights from the manager/collection', () => {
    const manager = new WeightManager()
    const weight1 = new Weight(1, 'g')
    manager.addWeight(weight1)
    manager.eraseAllWeights()
    // It worked?
    expect(manager.numberOfWeights()).toBe(0)
    expect(manager.weights).toEqual([])
  })
})
