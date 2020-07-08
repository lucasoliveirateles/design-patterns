'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('description')
      table.float('stock')
      table.float('cost_price')
      table.float('sale_price')
      table.text('code')
      table.date('date')
      table.string('origin')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
