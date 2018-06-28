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
        return store.deliveries.filter(delivery => {
          return delivery.neighborhoodId === this.id;
        })
        debugger
      }
  }

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

const Meal = (() => {
  let mealIds = 1;
  return class {
    constructor(title, price = 0) {
      this.id = mealIds++;
      this.title = title;
      this.price = price;
      store.meals.push(this);
    }

    deliveries() {
      return store.deliveries.filter(delivery => delivery.mealId === this.id);
    }

    customers() {
      const allCustomers = this.deliveries().map(delivery => delivery.customer());
      return [...new Set(allCustomers)];
    }

    static byPrice() {
      return store.meals.sort((a, b) => a.price < b.price);
    }
  };
})();
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
