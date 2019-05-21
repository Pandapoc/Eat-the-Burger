const express = require('express')
const app = express()
const { join } = require('path')
const routes = require('./routes')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')


app.use(routes)

app.listen(3000)

console.log('ping')