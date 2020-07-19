const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Schedule', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('DB Connected')
})

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000., () => {
    console.log("Server running")
})