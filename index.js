// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let customerId = 0
let mealId = 0
let deliveryId = 0

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id
        return delivery
    })
  }
  meals() {
      return this.customers().map(customer => {
        return customer.meal
      })
      debugger
    }
  customers() {
      return store.customers.filter(customer => {
        return customer.neighborhoodId === this.id
      })
      debugger
    }
}

class Customer {
  constructor(name, neighborhood) {
    this.name = name
    this.neighborhoodId = neighborhood.id
    this.id = customerId++
    store.customers.push(this)
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = mealId++
    store.meals.push(this)
  }
}

class Delivery {
  constructor(meal, neighborhood, customerId) {
    this.mealId = meal.id
    this.neighborhoodId = neighborhood.id
    this.customerId = customer.id
    this.id = deliveryId++
    store.delivery.push(this)
  }

    meal () {
      return store.deliveries.filter(delivery => {
        return delivery.mealId === this.id
      })
    }
}
