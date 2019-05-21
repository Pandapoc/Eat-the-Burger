const Burger = require('../models')


module.exports = app => {
    app.get('/', (req, res) => {
        Burger.findAll()
            .then(burgers => res.render('index', { burgers }))
            .catch(e => console.log(e))
    })

    app.post('/burger', (req, res) => {
        Burger.create()
        res.sendStatus(200)
    })

    app.put('/burger/:id', (req, res) => {
        Burger.update()
        res.sendStatus(200)
    })
}