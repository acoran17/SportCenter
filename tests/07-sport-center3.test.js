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

test('Get facilities', () => {
  expect(sc.getFacilities()).toEqual([spa, weight, pool])
})

test('Get activities', () => {
  expect(sc.getActivities()).toEqual([zumba, spinning, pilates, step])
})
