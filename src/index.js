const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
mongoose.connect('mongodb+srv://omnistack:iurd2016@cluster0-lb1cb.mongodb.net/todo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)
app.listen(3333)