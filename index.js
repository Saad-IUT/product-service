const app = require('express')()
const jsonParser = require('body-parser').json()
// const cors = require('cors')()

const {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateCategory,
  syncProduct,
} = require('./products')

app.use(jsonParser)

// Product routes
app.post('/product/add', addProduct)
app.delete('/product/remove/:productId', deleteProduct)
app.get('/product/list', getAllProducts)
app.post('/product/updateCategory', updateCategory)

// Routes from rating service
app.post('/product/sync', syncProduct)

//Testing
app.get('/', (req, res) => {
  res.send('OK')
})
let port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
