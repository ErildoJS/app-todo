const {Schema, model} = require('mongoose')
const Todo = require('../models/Todo')


const NewTodoSchema = new Schema({
    todo: {
        type: {
            type: String,
            required: true
        },
        novo_todo: {
            type: Schema.Types.ObjectId,
            ref: 'Todo'
        }
    }
}, {
    timestamps: true
})

module.exports = model('NewTodo', NewTodoSchema)