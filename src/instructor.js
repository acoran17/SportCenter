const Activity = require('./activity')

class Instructor {
  #basicSalary

  ledActivities = []
  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
    this.ledActivities = []
  }

  get salary () {
    return this.#basicSalary +
      this.ledActivities.reduce((t, a) => t + 100 + 5 * a.assistance, 0)
  }

  lead (activity) {
    if (activity instanceof Activity) {
      activity.instructor = this
      this.ledActivities.push(activity)
    }
  }
}

module.exports = Instructor
