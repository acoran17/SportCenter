/* eslint-env jest */

const Activity = require('../src/activity')
const Facility = require('../src/facility')
const Instructor = require('../src/instructor')

const SportCenter = require('../src/sport-center')

const sc = new SportCenter('Radazul', 45, 60)
const spa = new Facility('SPA', 3000)
const zumba = new Activity('Zumba')
const spinning = new Activity('Spinning', 300, 10, 15)
const pilates = new Activity('Pilates', 30, 1, 30)
const weight = new Facility('Weight Room', 600)
const pool = new Facility('Swimming Pool', 4500)
const step = new Activity('Step', 40, 1, 40)

test('Calculate costService of Sport Center without services', () => {
  expect(sc.costServices()).toBe(0)
})

test('Calculate costService of Sport Center with services', () => {
  sc.addService(spa)
  expect(sc.costServices()).toBe(250)

  sc.addService(zumba)
  expect(sc.costServices()).toBe(250)

  sc.addService(spinning)
  expect(sc.costServices()).toBe(700)

  sc.addService(pilates)
  expect(sc.costServices()).toBe(760)

  sc.addService(weight)
  expect(sc.costServices()).toBe(810)

  sc.addService(pool)
  expect(sc.costServices()).toBe(1185)

  sc.addService(step)
  expect(sc.costServices()).toBe(1265)
})

const pepe = new Instructor('Pepe') // basicSalary = 500
const marta = new Instructor('Marta', 600)
const susana = new Instructor('Susana', 700)

test('Calculate costInstructors of Sport Center without instructors', () => {
  expect(sc.costInstructors()).toBe(0)
})

test('Calculate costInstructors of Sport Center with instructors without activities', () => {
  sc.addInstructor(pepe)
  sc.addInstructor(marta)
  sc.addInstructor(susana)
  expect(sc.costInstructors()).toBe(1800)
})

test('Calculate costInstructors of Sport Center with instructors with activities', () => {
  sc.addInstructor(pepe)
  sc.addInstructor(marta)
  sc.addInstructor(susana)
  pepe.lead(zumba)
  pepe.lead(spinning)
  marta.lead(pilates)
  susana.lead(step)
  expect(sc.costInstructors()).toBe(2625)
})
