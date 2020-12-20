const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    schema_version: Number,
    name: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('user', UserSchema)


module.exports = User