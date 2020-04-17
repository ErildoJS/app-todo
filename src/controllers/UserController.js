const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.find()

        return res.json(users)
    },

    async store(req, res){


        const {email, password} = req.body
        const userExiits = await User.findOne({email})

        if(userExiits) {
            return res.status(401).json({error: 'User already exists'})
        }

        const user = await User.create({
            email,
            password   
        })

        return res.json(user)
    }
}