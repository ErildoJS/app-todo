const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    async store(req, res){


        const {user} = req.headers
        const {name} = req.body
        const loggedUser = await User.findById(user)

        const novotodo = await Todo.create({
            name,
        })
        loggedUser.todo.push(novotodo)

        await loggedUser.save()

        return res.json(novotodo)
    }
}