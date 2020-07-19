const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(5000., () => {
    console.log("Server running")
})