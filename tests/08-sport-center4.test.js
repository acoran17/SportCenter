/* eslint-env jest */

const Activity = require('../src/activity')
const Facility = require('../src/facility')
const SportCenter = require('../src/sport-center')

const sc = new SportCenter('Radazul', 45, 60)
const spa = new Facility('SPA', 3000)
const zumba = new Activity('Zumba')
const spinning = new Activity('Spinning', 100)
const pilates = new Activity('Pilates', 30)
const weight = new Facility('Weight Room', 800)
const pool = new Facility('Swimming Pool', 4500)
const step = new Activity('Step', 40)

sc.addService(spa)
sc.addService(zumba)
sc.addService(spinning)
sc.addService(pilates)
sc.addService(weight)
sc.addService(pool)
sc.addService(step)

test('Get unordered services. First add is the first in the list.', () => {
  expect(sc.getServices()).toEqual([spa, zumba, spinning, pilates, weight, pool, step])
})

test('Get services order by name.', () => {
  sc.orderServicesBy('name')
  expect(sc.getServices()).toEqual([pilates, spa, spinning, step, pool, weight, zumba])
})

test('Get services order by rating.', () => {
  spinning.giveRating(7)
  pool.giveRating(6)
  zumba.giveRating(5)
  pilates.giveRating(4)
  step.giveRating(3)
  spa.giveRating(2)
  weight.giveRating(1)
  sc.orderServicesBy('rating')
  expect(sc.getServices()).toEqual([spinning, pool, zumba, pilates, step, spa, weight])
})
