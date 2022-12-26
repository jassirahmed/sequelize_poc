const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userCtrl = require('./controllers/userControllers')
require('./models')


app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/add', userCtrl.addUser)
app.listen(3000, () => {
    console.log('App will run on: http://localhost:3000');
})