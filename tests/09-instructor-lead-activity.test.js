/* eslint-env jest */

const Activity = require('../src/activity')
const Instructor = require('../src/instructor')

test('Instructor initialize property ledActivities with a empty list []', () => {
  const pepe = new Instructor('Pepe')
  expect(pepe.ledActivities).toHaveLength(0)
  expect(pepe.ledActivities).toEqual([])
})

test('Instructor method lead(activity) add this activity to the list of ledActivities', () => {
  const pepe = new Instructor('Pepe')
  const zumba = new Activity('Zumba')
  pepe.lead(zumba)
  expect(pepe.ledActivities).toHaveLength(1)
  expect(pepe.ledActivities).toContain(zumba)
})

test('Instructor lead many activities', () => {
  const pepe = new Instructor('Pepe')
  const zumba = new Activity('Zumba')
  pepe.lead(zumba)
  expect(pepe.ledActivities).toHaveLength(1)
  expect(pepe.ledActivities).toContain(zumba)
  const pilates = new Activity('Pilates', 30)
  pepe.lead(pilates)
  expect(pepe.ledActivities).toHaveLength(2)
  expect(pepe.ledActivities).toContain(zumba)
  expect(pepe.ledActivities).toContain(pilates)
  const spinning = new Activity('Spinning', 100)
  pepe.lead(spinning)
  expect(pepe.ledActivities).toHaveLength(3)
  expect(pepe.ledActivities).toContain(zumba)
  expect(pepe.ledActivities).toContain(pilates)
  expect(pepe.ledActivities).toContain(spinning)
})

test('Instructor method lead(activity) where activity must be class Activity', () => {
  const pepe = new Instructor('Pepe')
  pepe.lead(3)
  expect(pepe.ledActivities).toHaveLength(0)
  expect(pepe.ledActivities).not.toContain(3)
  pepe.lead('This is text')
  expect(pepe.ledActivities).toHaveLength(0)
  expect(pepe.ledActivities).not.toContain('This is text')
  const now = new Date()
  pepe.lead(now)
  expect(pepe.ledActivities).toHaveLength(0)
  expect(pepe.ledActivities).not.toContain(now)
})
