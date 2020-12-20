const router = require('express').Router()
const { createUser, getAllUsers, deleteAllUsers } = require('../controller/userController')


router.get('/', (req, res) => {
    res.send('we in useres')
})

router.post('/create', createUser)
router.get('/all', getAllUsers)
router.get('/deleteall', deleteAllUsers)

module.exports = router