/* eslint-env jest */

const Instructor = require('../src/instructor')
const Activity = require('../src/activity')

const pepe = new Instructor('Pepe') // basicSalary = 500
const marta = new Instructor('Marta', 600)
const susana = new Instructor('Susana', 700)
const zumba = new Activity('Zumba')
const spinning = new Activity('Spinning', 100)
const pilates = new Activity('Pilates', 30)

test('Salary without activities', () => {
  expect(pepe.salary).toBe(500)
  expect(marta.salary).toBe(600)
  expect(susana.salary).toBe(700)
})

test('Salary instructor with activities without assistance ', () => {
  pepe.lead(zumba)
  pepe.lead(spinning)
  pepe.lead(pilates)
  expect(pepe.salary).toBe(800) // basicsalary: 500 + zumba: 100 + spinning: 100 + pilates: 100
})

test('Salary instructor with activities with assistance ', () => {
  zumba.assistance = 20
  pilates.assistance = 10
  expect(pepe.salary).toBe(950)
  // basicsalary: 500 + zumba:(100 + 5*20) + spinning:(100 + 5*0) + pilates: (100 + 5*10)
})
