/* eslint-env jest */

const Client = require('../src/client')

test('Create a Client is instance of Client', () => {
  const angeles = new Client('Angeles Parada', 33)
  expect(angeles).toBeInstanceOf(Object)
  expect(angeles).toBeInstanceOf(Client)
})

test('Create a Client have the correct properties', () => {
  const angeles = new Client('Angeles Parada', 33)
  expect(angeles.name).toBe('Angeles Parada')
  expect(angeles.age).toBe(33)
})

test('Client without age value get 50 years-old', () => {
  const angeles = new Client('Angeles Parada')
  expect(angeles.name).toBe('Angeles Parada')
  expect(angeles.age).toBe(50)
})

test('category is calculate from age', () => {
  const angeles = new Client('Angeles Parada', 33)
  const paco = new Client('Francisco Castaño', 63)
  const cristi = new Client('Cristina Maria Robles', 20)
  const tere = new Client('Maria Teresa Pinilla')
  const julen = new Client('Julen Sancho', 40)
  const victor = new Client('Victor Salas', 22)
  expect(angeles.category).toBe('Senior')
  expect(paco.category).toBe('Veterano')
  expect(cristi.category).toBe('Promesa')
  expect(tere.category).toBe('Veterano')
  expect(julen.category).toBe('Senior')
  expect(victor.category).toBe('Senior')
})

test('if age is changed, category is updated', () => {
  const julen = new Client('Julen Sancho', 40)
  const victor = new Client('Victor Salas', 21)
  expect(julen.category).toBe('Senior')
  expect(victor.category).toBe('Promesa')
  julen.turnedYearsOld()
  victor.turnedYearsOld()
  expect(julen.category).toBe('Veterano')
  expect(victor.category).toBe('Senior')
})

test('turnedYearsOld() increment age property', () => {
  const angeles = new Client('Angeles Parada', 33)
  expect(angeles.age).toBe(33)
  angeles.turnedYearsOld()
  expect(angeles.age).toBe(34)
  angeles.turnedYearsOld()
  angeles.turnedYearsOld()
  expect(angeles.age).toBe(36)
})

test('Avoid negative age', () => {
  const angeles = new Client('Angeles Parada', 33)
  expect(angeles.age).toBe(33)
  angeles.age = 40
  expect(angeles.age).toBe(40)
  angeles.age = 30
  expect(angeles.age).toBe(30)
  angeles.age = -4
  expect(angeles.age).toBe(30)
})

test('Avoid negative age in the constructor', () => {
  const angeles = new Client('Angeles Parada', -3)
  expect(angeles.age).toBe(50)
})
