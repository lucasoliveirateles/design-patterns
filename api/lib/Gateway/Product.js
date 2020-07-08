const ProductGateway = use('Lib/Gateway/ProductGateway')

/**
 * Product Control Class
 * @author Lucas Teles
 */
class Product {
  setConnection (database) {
    this.database = database

    ProductGateway.setConnection(database)
  }

  store (data) {
    const products = ProductGateway.store(data)

    return products
  }

  find (id, product) {
    const products = ProductGateway.find(id, product)

    return products
  }

  all (filter) {
    const products = ProductGateway.all(filter)

    return products
  }

  update (id, data) {
    const products = ProductGateway.update(id, data)

    return products
  }

  delete (id) {
    const products = ProductGateway.delete(id)

    return products
  }

  getProfitMargin (data) {
    return ((data.cost_price - data.sale_price) / data.cost_price) * 100
  }
}

module.exports = Product
