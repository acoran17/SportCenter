/* eslint-env jest */

const SportCenter = require('../src/sport-center')
const Instructor = require('../src/instructor')
const Activity = require('../src/activity')

const sc = new SportCenter('Radazul', 49.50, 100)
const pepe = new Instructor('Pepe')
const marta = new Instructor('Marta', 600)
const susana = new Instructor('Susana', 700)
const zumba = new Activity('Zumba')
const spinning = new Activity('Spinning', 100)
const pilates = new Activity('Pilates', 30)

test('Without instructors listInstructorActivities is empty', () => {
  expect(sc.listInstructorsActivities()).toEqual([])
})

test('With one instructor without activities, listInstructorActivities is a list with only a array with only a element (the name of the instructor)', () => {
  sc.addInstructor(pepe)
  expect(sc.listInstructorsActivities()).toEqual([['Pepe']])
})

test('With two instructors without activities, listInstructorActivities is a list with two arrays with only a element (the name of the instructor)', () => {
  sc.addInstructor(pepe)
  sc.addInstructor(marta)
  expect(sc.listInstructorsActivities()).toEqual([['Pepe'], ['Marta']])
})

test('With instructors with activities, listInstructorActivities is a list with arrays with has in the first element the name of the instructor and the name of activities in the rest', () => {
  sc.addInstructor(pepe)
  pepe.lead(zumba)
  pepe.lead(pilates)
  sc.addInstructor(marta)
  sc.addInstructor(susana)
  susana.lead(spinning)
  expect(sc.listInstructorsActivities()).toEqual([
    ['Pepe', 'Zumba', 'Pilates'],
    ['Marta'],
    ['Susana', 'Spinning']
  ])
})
