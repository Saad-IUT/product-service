const { v4: uuidv4 } = require('uuid')
const { db } = require('./admin')
const { validateProduct } = require('./validators')

exports.helloWorld = (request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
}

// Add Product
exports.addProduct = async (req, res) => {
  const valid = await validateProduct(req.body.name)
  if (valid) {
    const newProduct = {
      name: req.body.name,
      categoryId: req.body.categoryId,
    }
    db.collection('products')
      .add(newProduct)
      .then(() => {
        res.status(201).json({ message: 'Product added successfully' })
      })
      .catch(err => {
        res.status(500).json({ error: 'something went wrong' })
        console.error(err)
      })
  } else {
    return res.status(400).json({ product: 'Duplicate' })
  }
}

// Delete a product
exports.deleteProduct = (req, res) => {
  const productRef = db.doc(`/products/${req.params.productId}`)
  productRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'product not found' })
      }
      if (doc.data().userHandle !== req.user.handle) {
        return res.status(403).json({ error: 'Unauthorized' })
      } else {
        return productRef.delete()
      }
    })
    .then(() => {
      res.json({ message: 'product deleted successfully' })
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ error: err.code })
    })
}
