const { addProduct } = require('./products')
const app = require('express')()
const jsonParser = require('body-parser').json()
// const cors = require('cors')()

app.use(jsonParser)

app.get('/', (req, res) => {
  res.send('OK')
})

// app.post('/product/add', addProduct)

// let port = process.env.PORT || 3000
// app.listen(port, () => {
//   console.log(`Running on port ${port}`)
// })
