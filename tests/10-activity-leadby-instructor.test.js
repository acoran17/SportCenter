/* eslint-env jest */

const Activity = require('../src/activity')
const Instructor = require('../src/instructor')

test('Activity initialize property instructor with null', () => {
  const zumba = new Activity('Zumba')
  expect(zumba.instructor).toBeNull()
})

test('Activity method ledBy(i) updates the property instructor = i ', () => {
  const zumba = new Activity('Zumba')
  const pepe = new Instructor('Pepe')
  zumba.ledBy(pepe)
  expect(zumba.instructor).toBe(pepe)
})

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
  expect(zumba.instructor).toBe(pepe)
})
