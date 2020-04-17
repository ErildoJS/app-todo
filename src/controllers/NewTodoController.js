const Todo = require('../models/Todo')
const NewTodo = require('../models/NewTodo')

module.exports = {
    async store() {
        const {user} = req.headers
        const {todo} = req.body

        const loggedId = await Todo.findById(user)
        const PresentTodo = await Todo.findOne({todo})

        if(PresentTodo) {
            return res.status(400).json({error: 'Todo Already exists'})
        }


        loggedId.novo_todo.push()

    }
}