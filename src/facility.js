const Service = require('./service')

class Facility extends Service {
  constructor (name, maintenanceCost = 0) {
    super(name)
    this.maintenanceCost = maintenanceCost
  }

  calculateCost () {
    return this.maintenanceCost / 12
  }
}

module.exports = Facility
