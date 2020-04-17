const {Router} = require('express')
const UserController = require('./controllers/UserController')
const TodoController = require('./controllers/TodoController')
const routes = Router()



routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.get('/todos', (req, res) => {
    return res.json({ok: true})
})
routes.post('/todos', TodoController.store)

module.exports = routes