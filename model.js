const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 10     // по умолчанию 10 лет
    },
    phone:{
        type: String,
        default:''   // по умолчанию пусто
    }
})

exports.UserModel = mongoose.model('user', userSchema)