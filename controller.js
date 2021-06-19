const { UserModel } = require('./model')

exports.saveUser = async function(req, res) {
    try {
        const user = req.body

//надо в постмане ввести по шаблону - емэйл, эйдж, фон
        const savedUser = await UserModel.create(user)
        res.status(200).json({
            message: 'Пользователь сохранен',
            user: savedUser
        })
    } catch(error) {
        console.log('Произошла ошибка при сохранении пользователя ', error)
    }
}

exports.getUserById = async function (req, res) {
    try {
        const gotUser = await UserModel.findById(req.params.id)
        res.status(200).json({
            message: 'Пользователь получен по ID: ',
            id: req.params.id,
            user: gotUser
         })
    } catch(e) {
        console.log('произошла ошибка при запросе пользователя по ID')
    }
}

exports.getUsers = async function (req, res) {
    try {
        const gotUsers = await UserModel.find({})
        res.status(200).json({
            message: 'Получены все пользователи: ',
            users: gotUsers
         })
    } catch(e) {
        console.log('произошла ошибка при запросе пользователей')
    }
}


exports.editUser = async function(req, res) {
    try {
        const userId = req.params.id
        const user = req.body

       const updatedUser = await UserModel.findByIdAndUpdate(userId, user)


        res.status(200).json({
            message: 'Пользователь изменен',
            user: updatedUser
        })
    } catch(e) {
        console.log('произошла ошибка при изменении пользователя')
    }
}

exports.deleteUser = async function(req, res) {
    try {
        const userId = req.params.id
        const user = req.body

       const deletedUser = await UserModel.findByIdAndDelete(userId)


        res.status(200).json({
            message: 'Пользователь удален',
            user: deletedUser
        })
    } catch(e) {
        console.log('произошла ошибка при удалении пользователя')
    }
}