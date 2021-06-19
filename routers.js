const express = require('express')
const router = express.Router()

const { saveUser, getUserById, getUsers, editUser, deleteUser } = require('./controller')

router.post('/save-user', saveUser)
router.get('/get-user-by-id/:id', getUserById)
router.get('/get-users', getUsers)
router.patch('/edit-user/:id', editUser)
router.delete('/delete-user/:id', deleteUser)


exports.router = router
