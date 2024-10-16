class Client {
  #age = 50
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  get category () {
    if (this.#age < 22) return 'Promesa'
    if (this.#age > 40) return 'Veterano'
    return 'Senior'
  }

  turnedYearsOld () {
    this.#age++
  }

  get age () {
    return this.#age
  }

  set age (age) {
    if (age >= 0) this.#age = age
  }
}

module.exports = Client
