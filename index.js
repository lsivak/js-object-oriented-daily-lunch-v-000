// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId
    store.neighborhoods.push(this)
  }
}

class Customer {
  constructor(name, neighborhood) {
    this.name = name
    this.neighborhoodId = neighborhood.id
    this.id = customerId
    store.neighborhoods.push(this)
  }
}
