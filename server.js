const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')


require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(3000))
    .catch(e => console.log(e))

console.log('ping')