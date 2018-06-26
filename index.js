// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 1
let customerId = 0
let mealId = 0
let deliveryId = 0


class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }

  customers() {
      return store.customers.filter(customer => {
        customer.neighborhoodId === this.id
      })
    }

  meals() {
      return this.customers().map(customer => {
        return customer.meal
      })
    }

      deliveries() {
        return store.deliveries.filter(delivery => {
          return delivery.neighborhoodId === this.id
            return delivery
        })
      }
  }

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
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
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    this.id = deliveryId++
    store.delivery.push(this)
  }

    meal () {
      return store.deliveries.filter(delivery => {
        return delivery.mealId === this.id
      })
    }
}
