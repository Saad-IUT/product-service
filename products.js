// const { v4: uuidv4 } = require('uuid')
// const { db } = require('./admin')

// exports.helloWorld = (request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true })
//   response.send('Hello from Firebase!')
// }

// // Add Product
// exports.addProduct = (req, res) => {
//   const newProduct = {
//     name: req.body.name,
//     uuid: uuidv4(),
//   }

//   db.collection('products')
//     .add(newProduct)
//     .then(() => {
//       res.status(201)
//     })
//     .catch(err => {
//       res.status(500).json({ error: 'something went wrong' })
//       console.error(err)
//     })
// }
