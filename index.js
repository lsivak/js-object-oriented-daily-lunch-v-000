// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
const Neighborhood = (() => {
  let neighborhoodIds = 1;
  return class {
    constructor(name) {
      this.id = neighborhoodIds++;
      this.name = name;
      store.neighborhoods.push(this);
    }

    customers() {
      return store.customers.filter(customer => customer.neighborhoodId === this.id);
    }

    meals() {
      const allMeals = this.customers().map(customer => customer.meals());
      const merged = [].concat.apply([], allMeals);
      return [...new Set(merged)];
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
    debugger
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
