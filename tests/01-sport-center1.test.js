/* eslint-env jest */

const SportCenter = require('../src/sport-center')

test('Create a Sport Center', () => {
  const name = 'Radazul'
  const fee = 49.50
  const membership = 100
  const sc = new SportCenter(name, fee, membership)
  expect(sc).toEqual({
    name: 'Radazul',
    fee: 49.50,
    membership: 100
  })
})

test('Create another Sport Center', () => {
  const sc = new SportCenter('D10', 45, 60)
  expect(sc).toEqual({
    name: 'D10',
    fee: 45,
    membership: 60
  })
})

test('Create a Sport Center without membership', () => {
  const sc = new SportCenter('Luxury Club', 360)
  expect(sc).toEqual({
    name: 'Luxury Club',
    fee: 360,
    membership: 0
  })
})

test('Create a Sport Center and get the income', () => {
  const sc = new SportCenter('D10', 40, 60)
  expect(sc.income()).toBe(2400)
  sc.fee = 49.99
  expect(sc.income()).toBe(2999.4)
})
