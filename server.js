const express = require("express")
require('./src/models')
const bodyParser = require('body-parser')
const userCtrl = require('./src/controllers/userControllers')
const app = express()
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/add', userCtrl.addUser);

app.get('/users', userCtrl.getUsers);

app.get('/users/:id', userCtrl.getUser);

app.post('/users', userCtrl.postUser);

app.delete('/users/:id', userCtrl.deleteUser);

app.patch('/users/:id', userCtrl.updateUser);

app.get('/query', userCtrl.queryUser);

app.get('/count', userCtrl.usersCount);

app.get('/finder', userCtrl.finders)

app.listen(PORT, () => {
    console.log('App will run on: http://localhost:3000');
})