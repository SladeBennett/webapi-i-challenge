const express = require('express')
const methods = require('./data/db.js')

const server = express()

server.get('/users', (req, res) => {
   res.status(200).json('hello')
   methods.find()
})

server.listen(5000, () => console.log('Server Api running on 5000'))