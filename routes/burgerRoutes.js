const Burger = require('../models')

module.exports = app => {
    // GET all items
    app.get('/todo', (req, res) => {
            ToDo.findAll({ include: [User] })
                .then(items => res.json(items))
                .catch(e => console.log(e))
        })
        // POST an item
    app.post('/todo', (req, res) => {
            ToDo.create(req.body)
                .then(_ => res.sendStatus(200))
                .catch(e => console.log(e))
        })
        // PUT an item
    app.put('/todo/:id', (req, res) => {
            // req.params.id
            // req.body
            ToDo.update(req.body, { where: { id: req.params.id } })
                .then(_ => res.sendStatus(200))
                .catch(e => console.log(e))
        })
        // DELETE an item
    app.delete('/todo/:id', (req, res) => {
        ToDo.destroy({ where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}