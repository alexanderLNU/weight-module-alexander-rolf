import Weight from '../classes/Weight.js'
import WeightCollection from '../classes/WeightCollection.js'

describe('WeightCollection', () => {
  test('Remove weight instance from collection', () => {
    const weightCollection = new WeightCollection()
    const weight = new Weight(5000, 'g')
    weightCollection.addWeightToCollection(weight)
    const removedWeight = weightCollection.removeWeight(weight)
    expect(removedWeight).toBe(true)
  })

  test('The removeWeight method should return false if the weight is not present', () => {
    const weightCollection = new WeightCollection()
    const weight = new Weight(5000, 'g')
    const removedWeight = weightCollection.removeWeight(weight)
    expect(removedWeight).toBe(false)
  })

  test('Add weight instance from collection', () => {
    const weightCollection = new WeightCollection()
    const weight = new Weight(5000, 'g')
    weightCollection.addWeightToCollection(weight)
    expect(weightCollection.weights).toContain(weight)
    expect(weightCollection.numberOfWeights()).toBe(1)
  })

  test('The addWeightToCollection method should throw error if your trying to add a non-weight instance', () => {
    const weightCollection = new WeightCollection()
    expect(() => weightCollection.addWeightToCollection('WRONG')).toThrow('The argument has to be an instance of Weight!')
  })

  test('The method numberOfWeights returns correct amount of weights whjen they are added', () => {
    const weightCollection = new WeightCollection()
    expect(weightCollection.numberOfWeights()).toBe(0)
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    weightCollection.addWeightToCollection(weight1)
    weightCollection.addWeightToCollection(weight2)
    expect(weightCollection.numberOfWeights()).toBe(2)
  })

  test('The method numberOfWeights removes correct amount of weights when they are removed', () => {
    const weightCollection = new WeightCollection()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    weightCollection.addWeightToCollection(weight1)
    weightCollection.addWeightToCollection(weight2)
    weightCollection.removeWeight(weight1)
    expect(weightCollection.numberOfWeights()).toBe(1)
  })

  test('The method numberOfWeights return no weights when it is empty', () => {
    const weightCollection = new WeightCollection()
    expect(weightCollection.numberOfWeights()).toBe(0)
  })

  test('The method getTotalWeight returns the total weuight of all weights', () => {
    const weightCollection = new WeightCollection()
    weightCollection.addWeightToCollection(new Weight(5000, 'g'))
    weightCollection.addWeightToCollection(new Weight(1, 'kg'))
    const weight = weightCollection.getTotalWeight()
    expect(weight.weight).toBe(6000)
    expect(weight.weightUnit).toBe('g')
  })

  test('The method getTotalWeight should give the total weuight in a specific wanted unit', () => {
    const weightCollection = new WeightCollection()
    weightCollection.addWeightToCollection(new Weight(5000, 'g'))
    weightCollection.addWeightToCollection(new Weight(1, 'kg'))
    weightCollection.addWeightToCollection(new Weight(20, 'lb'))
    const weight = weightCollection.getTotalWeight('kg')
    const TotalKgShouldBe = (5000 + 1000 + 9071.8474) / 1000
    expect(weight.weight).toBeCloseTo(TotalKgShouldBe)
    expect(weight.weightUnit).toBe('kg')
  })

  test('The method getAverageWeight should return average weight in the DEFAULT unit when we do not specify', () => {
    const weightCollection = new WeightCollection()
    weightCollection.addWeightToCollection(new Weight(5000, 'g'))
    weightCollection.addWeightToCollection(new Weight(6000, 'g'))
    const avgWeight = weightCollection.getAverageWeight()
    const avgWeightShouldBe = (5000 + 6000) / 2
    expect(avgWeight.weight).toBe(avgWeightShouldBe)
    expect(avgWeight.weightUnit).toBe('g')
  })

  test('The method getAverageWeight should return average weight in the wanted unit that is being chosen/specified', () => {
    const weightCollection = new WeightCollection()
    weightCollection.addWeightToCollection(new Weight(5, 'kg'))
    weightCollection.addWeightToCollection(new Weight(6000, 'g'))
    const avgWeight = weightCollection.getAverageWeight('kg')
    const avgWeightShouldBe = (5 + 6) / 2
    expect(avgWeight.weight).toBe(avgWeightShouldBe)
    expect(avgWeight.weightUnit).toBe('kg')
  })

  test('The method getHeaviestWeight should return the heaviest weight in the collection', () => {
    const weightCollection = new WeightCollection()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    const weight3 = new Weight(20, 'lb')
    const weight4 = new Weight(100, 'kg')
    weightCollection.addWeightToCollection(weight1)
    weightCollection.addWeightToCollection(weight2)
    weightCollection.addWeightToCollection(weight3)
    weightCollection.addWeightToCollection(weight4)
    const heaviestWeight = weightCollection.getHeaviestWeight()
    expect(heaviestWeight).toBe(weight4)
  })

  test('The method getLightestWeight should return the lightest weight in the collection', () => {
    const weightCollection = new WeightCollection()
    const weight1 = new Weight(5000, 'g')
    const weight2 = new Weight(1, 'kg')
    const weight3 = new Weight(20, 'lb')
    const weight4 = new Weight(100, 'kg')
    weightCollection.addWeightToCollection(weight1)
    weightCollection.addWeightToCollection(weight2)
    weightCollection.addWeightToCollection(weight3)
    weightCollection.addWeightToCollection(weight4)
    const lightestWeight = weightCollection.getLightestWeight()
    expect(lightestWeight).toBe(weight2)
  })

  test('The method mergeManagersData should merge the weights correctly', () => {
    const weightCollection1 = new WeightCollection()
    const weightCollection2 = new WeightCollection()
    const weight1 = new Weight(1, 'kg')
    const weight2 = new Weight(5, 'kg')
    const weight3 = new Weight(10, 'kg')
    weightCollection1.addWeightToCollection(weight1)
    weightCollection1.addWeightToCollection(weight2)
    weightCollection2.addWeightToCollection(weight3)
    weightCollection1.mergeManagersData(weightCollection2) // Merge it
    expect(weightCollection1.weights).toContain(weight1)
    expect(weightCollection1.weights).toContain(weight2)
    expect(weightCollection1.weights).toContain(weight3)
    expect(weightCollection1.numberOfWeights()).toBe(3)
  })

  test('The method eraseALlWeights should properly erase all weights from the collection', () => {
    const manager = new WeightCollection()
    const weight1 = new Weight(1, 'g')
    manager.addWeightToCollection(weight1)
    manager.eraseAllWeights()
    // It worked?
    expect(manager.numberOfWeights()).toBe(0)
    expect(manager.weights).toEqual([])
  })
})
