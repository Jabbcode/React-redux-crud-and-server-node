const { Router } = require('express')
const { GetAllUsers, GetUser, UserCreated, EditUser, DeleteUser } = require('../controllers/users')

const router = Router()

router.get('/', GetAllUsers)

router.get('/:id', GetUser)

router.post('/user', UserCreated)

router.put('/user/:id', EditUser)

router.delete('/user-delete/:id', DeleteUser)

module.exports = router
