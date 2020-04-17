const {Schema, model} = require('mongoose')

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Todo', TodoSchema)