/* eslint-env jest */

const Service = require('../src/service')

test('Create a Service', () => {
  const service = new Service('Zumba')
  expect(service).toEqual({
    name: 'Zumba',
    ratings: []
  })
})

test('Give some ratings', () => {
  const service = new Service('Zumba')
  expect(service.ratings).toEqual([])
  service.giveRating(1)
  expect(service.ratings).toEqual([1])
  service.giveRating(2)
  expect(service.ratings).toEqual([1, 2])
  service.giveRating(2)
  expect(service.ratings).toEqual([1, 2, 2])
})

test('Get the rating of the sports center with no given ratings.', () => {
  const service = new Service('Zumba')
  expect(service.rating).toBe(0)
})

test('Get the rating of the sports center with some given ratings.', () => {
  const service = new Service('Zumba')
  service.giveRating(3)
  expect(service.rating).toBe(3)
  service.giveRating(5)
  expect(service.rating).toBe(4)
  service.giveRating(3)
  service.giveRating(2)
  expect(service.rating).toBe(3.25)
})

test('Get the rating of the sports center with some given ratings rounding to two decimal places.', () => {
  const service = new Service('Zumba')
  service.giveRating(5)
  service.giveRating(4)
  service.giveRating(4)
  expect(service.rating).toBe(4.33)
  service.giveRating(5)
  service.giveRating(2)
  service.giveRating(2)
  expect(service.rating).toBe(3.67)
})
