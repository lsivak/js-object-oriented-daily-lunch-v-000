// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 1
let customerId = 1
let mealId = 1
let deliveryId = 1


class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }

  customers() {
      return store.customers.filter(customer => {
        return customer.neighborhoodId === this.id
      })
    }

  meals() {
      return this.customers().map(customer => {
        return customer.meals()
      })
    }

    deliveries() {
       return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
     }
   };
 })();

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = customerId++
    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id

    })
  }
  meals() {
    return store.meals.find(meal => meal.id === this.mealId)
  }
  byPrice() {
    return this.meals().reduce((total, meal) => (total += meal.price), 0)
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

    meal() {
      return store.meals.find(meal => meal.id === this.mealId)
    }

    customer() {
      return store.customers.find(customer => customer.id === this.customerId)
    }

    neighborhood() {
      return store.neighborhood.find(neighborhood => neighborhood.id === this.neighborhoodId)
    }
}
