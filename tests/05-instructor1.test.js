/* eslint-env jest */

const Instructor = require('../src/instructor')

test('Create a instructor with basicSalary', () => {
  const name = 'Pepe'
  const basicSalary = 600
  const instructor = new Instructor(name, basicSalary)
  expect(instructor).toEqual({
    name: 'Pepe',
    ledActivities: []
  })
})

test('Create a instructor without basicSalary', () => {
  const name = 'Pepe'
  const instructor = new Instructor(name)
  expect(instructor).toEqual({
    name: 'Pepe',
    ledActivities: []
  })
})

test('Get salary of instructor without led activities and with basicSalary', () => {
  const instructor = new Instructor('Pepe', 600)
  expect(instructor.salary).toBe(600)
})

test('Get salary of instructor without led activities and without basicSalary', () => {
  const instructor = new Instructor('Pepe')
  expect(instructor.salary).toBe(500)
})
