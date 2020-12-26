const app = require('express')()
const jsonParser = require('body-parser').json()
const cors = require('cors')()

const { addProduct, deleteProduct } = require('./products')

app.use(cors, jsonParser)

// Product routes
app.post('/product/add', addProduct)
app.delete('/product/remove/:productId', deleteProduct)

//Testing
app.get('/', (req, res) => {
  res.send('OK')
})
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
