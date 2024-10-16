/* eslint-env jest */

const Activity = require('../src/activity')

test('Create a activity with fixedCost, variableCost and assistance', () => {
  const name = 'Zumba'
  const fixedCost = 50
  const variableCost = 5
  const assistance = 20
  const activity = new Activity(name, fixedCost, variableCost, assistance)
  expect(activity).toEqual({
    name: 'Zumba',
    ratings: [],
    fixedCost: 50,
    variableCost: 5,
    assistance: 20
  })
})

test('Create a activity without fixedCost, variableCost and assistance', () => {
  const name = 'Zumba'
  const activity = new Activity(name)
  expect(activity).toEqual({
    name: 'Zumba',
    ratings: [],
    fixedCost: 0,
    variableCost: 0,
    assistance: 0
  })
})

test('Calculate the cost by adding the variable cost for each attendee to the fixed cost.', () => {
  const name = 'Zumba'
  const fixedCost = 50
  const variableCost = 5
  const assistance = 20
  const activity = new Activity(name, fixedCost, variableCost, assistance)
  expect(activity.calculateCost()).toBe(50 + 5 * 20)
})
