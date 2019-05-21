const Burger = require('../models/burger.js')


module.exports = app => {
    app.get('/', (req, res) => {
        Burger.findAll()
            .then(burgers =>
                res.render('index', { burgers, id })
            )
            .catch(e => console.log(e))
    })

    app.post('/burger', (req, res) => {
        Burger.create(req.body)
            .then(burgers => { res.render('index', { burgers }) })
            .catch(e => console.log(e))
    })

    app.put('/burger/:id', (req, res) => {
        Burger.update(req.body, { where: { id: req.params.id } })
            .then(burgers => res.render('index', { burgers }))
            .catch(e => console.log(e))
    })
}