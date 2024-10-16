/* eslint-env jest */

const SportCenter = require('../src/sport-center')
const Instructor = require('../src/instructor')

test('Create a Sport Center, instructor not visible', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  expect(sc).toEqual({
    name: 'Radazul',
    fee: 49.50,
    membership: 100
  })
})

test('List of instructors is initialized empty ', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  expect(sc.getInstructors()).toEqual([])
})

test('addInstructor add the instructor to de list', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  const pepe = new Instructor('Pepe')
  sc.addInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).toContain(pepe)
  const marta = new Instructor('Marta', 600)
  sc.addInstructor(marta)
  expect(sc.getInstructors()).toHaveLength(2)
  expect(sc.getInstructors()).toContain(marta)
  expect(sc.getInstructors()).toContain(pepe)
})

test('addInstructor: parameter must be of the class Instructor', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  const pepe = new Instructor('Pepe')
  sc.addInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).toContain(pepe)
  sc.addInstructor('No soy instructor')
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).not.toContain('No soy instructor')
  expect(sc.getInstructors()).toContain(pepe)
  const sc2 = new SportCenter('D10', 35.10, 40)
  sc.addInstructor(sc2)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).not.toContain(sc2)
  expect(sc.getInstructors()).toContain(pepe)
})

test('addInstructor: don\'t add the same instructor twice', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  const pepe = new Instructor('Pepe')
  sc.addInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).toContain(pepe)
  const marta = new Instructor('Marta', 600)
  sc.addInstructor(marta)
  sc.addInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(2)
  expect(sc.getInstructors()).toContain(marta)
  expect(sc.getInstructors()).toContain(pepe)
})

test('removeInstructor delete the instructor to de list', () => {
  const sc = new SportCenter('Radazul', 49.50, 100)
  const pepe = new Instructor('Pepe')
  sc.addInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).toContain(pepe)
  const marta = new Instructor('Marta', 600)
  sc.addInstructor(marta)
  expect(sc.getInstructors()).toHaveLength(2)
  expect(sc.getInstructors()).toContain(marta)
  expect(sc.getInstructors()).toContain(pepe)
  sc.removeInstructor(pepe)
  expect(sc.getInstructors()).toHaveLength(1)
  expect(sc.getInstructors()).toContain(marta)
})
