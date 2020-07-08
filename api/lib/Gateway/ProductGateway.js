/**
 * Product Gateway
 * @author Lucas Teles
 */
class ProductGateway {
  setConnection (database) {
    this.database = database
  }

  store (data) {
    const sql = `insert into products

    (id, description, stock, cost_price, sale_price, code, date, origin)

    values

    (
      '${data.id}',
      '${data.description}',
      '${data.stock}',
      '${data.cost_price}',
      '${data.sale_price}',
      '${data.code}',
      '${data.date}',
      '${data.origin}'
    )`

    const products = this.database.raw(sql)

    return products
  }

  find (id) {
    const sql = `select * from products where id = ${id}`

    const products = this.database.raw(sql)

    return products
  }

  all (filter) {
    const sql = 'select * from products'

    let query = ''

    if (filter) {
      query = `${sql} where ${filter}`
    } else {
      query = sql
    }

    const products = this.database.raw(query)

    return products
  }

  update (idProduct, data) {
    const sql = `update products set

    description = '${data.description}',
    stock = '${data.stock}',
    cost_price = '${data.cost_price}',
    sale_price = '${data.sale_price}',
    code = '${data.code}',
    date = '${data.date}',
    origin = '${data.origin}'
    where id = '${idProduct}'`

    const products = this.database.raw(sql)

    return products
  }

  delete (id) {
    const sql = `delete from products where id = ${id}`

    const products = this.database.raw(sql)

    return products
  }
}

module.exports = new ProductGateway()
