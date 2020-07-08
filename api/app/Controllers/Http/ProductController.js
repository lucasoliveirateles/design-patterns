const Database = use('Database')

const Product = use('Lib/Gateway/Product')

class ProductController {
  async store ({ request, response }) {
    const data = request.all()

    try {
      const product = new Product()

      product.setConnection(Database)

      await product.store(data)

      return response.send(data)
    } catch (error) {
      return response
        .status(error.status).send({ message: 'Cannot to create product.' })
    }
  }

  async show ({ request, response }) {
    const id = request.params.id

    const product = new Product()

    product.setConnection(Database)

    const data = await product.find(id)

    return response.send(data.rows)
  }

  async index ({ request, response }) {
    const product = new Product()

    product.setConnection(Database)

    const data = await product.all()

    return response.send(data.rows)
  }

  async update ({ request, response }) {
    const id = request.params.id

    const data = request.all()

    try {
      const product = new Product()

      product.setConnection(Database)

      await product.update(id, data)

      return response.send({ message: 'Product updated.' })
    } catch (error) {
      return response
        .status(error.status).send({ message: 'Cannot to update product.' })
    }
  }

  async delete ({ request, response }) {
    const id = request.params.id

    try {
      const product = new Product()

      product.setConnection(Database)

      await product.delete(id)

      return response.send({ message: 'Product deleted.' })
    } catch (error) {
      return response
        .status(error.status).send({ message: 'Cannot to delete product.' })
    }
  }
}

module.exports = new ProductController()
