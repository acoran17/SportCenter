/* eslint-env jest */

const Facility = require('../src/facility')

test('Create a facility with maintenance cost', () => {
  const facility = new Facility('Spa', 2000)
  expect(facility).toEqual({
    name: 'Spa',
    ratings: [],
    maintenanceCost: 2000
  })
})

test('Create a facility without maintenance cost', () => {
  const facility = new Facility('Outdoor Space')
  expect(facility).toEqual({
    name: 'Outdoor Space',
    ratings: [],
    maintenanceCost: 0
  })
})

test('Calculate the cost by dividing the maintenance cost by the 12 months.', () => {
  const facility = new Facility('Spa', 3000)
  expect(facility.calculateCost()).toBe(250)
})
