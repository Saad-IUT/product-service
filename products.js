const { v4: uuidv4 } = require('uuid')
const { db } = require('./admin')
const { validateProduct } = require('./validators')

exports.helloWorld = (request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
}

// Add Product
exports.addProduct = (req, res) => {
  // const productRef = db.doc(`/products/${newProduct.name}`)
  // const newProduct = {
  //   name: req.body.name,
  //   categoryId: req.body.categoryId,
  // }
  const valid = validateProduct(req.body.name)
  console.log(valid)
  // productRef
  //   .get()
  //   .then(doc => {
  //     if (doc.exists) {
  //       return res.status(400).json({ product: 'Duplicate' })
  //     } else {
  //       productRef.set(newProduct)
  //       res.status(201).json({ message: 'Product successfully added' })
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({ error: 'something went wrong' })
  //     console.error(err)
  //   })
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
