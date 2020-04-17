const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    avatar: {
        type: String,
        required: false
    },
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    fazendo_todos: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    todos_completos: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

module.exports = model('User', UserSchema)