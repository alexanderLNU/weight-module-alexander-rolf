import Weight from '../classes/Weight.js'

describe('Weight', () => {
  test('Creating a new instance of Weight', () => {
    const weight = new Weight(5000, 'g')
    expect(weight.weight).toBe(5000)
    expect(weight.weightUnit).toBe('g')
  })
})

test('Converting weight to new unit', () => {
  const weight = new Weight(5000, 'g')
  const newWeight = weight.convert('kg')
  expect(newWeight.weight).toBe(5)
  expect(newWeight.weightUnit).toBe('kg')
})

test('Adding two instances of weight together', () => {
  const weight1 = new Weight(5000, 'g')
  const weight2 = new Weight(9, 'kg')
  const totalWeight = weight1.add(weight2)
  expect(totalWeight.weight).toBe(14000)
  expect(totalWeight.weightUnit).toBe('g')
})

test('Subtracting two instances of weight', () => {
  const weight1 = new Weight(10000, 'g')
  const weight2 = new Weight(9, 'kg')
  const subtractedWeight = weight1.subtract(weight2)
  expect(subtractedWeight.weight).toBe(1000)
  expect(subtractedWeight.weightUnit).toBe('g')
})

test('See if toString works', () => {
  const weight = new Weight(5000, 'g')
  expect(weight.toString()).toBe('5000 g')
})

// Potentiella tester att lägga till... jobba vidare.
// Kasta fel vid ogilt värde på vikten typ g.
// Kasta fel vid ogilt vikt t ex blablabla.
// Kasta fel if om den konv till ogiltlig unit?
// Kasta fel om man addar en icke-vikt instans?
// Samma som ovan men om man minusar en icke-vikt?
