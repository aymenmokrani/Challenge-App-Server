const router = require('express').Router()
const { createUser, getAllUsers } = require('../controller/userController')


router.get('/', (req, res) => {
    res.send('we in useres')
})

router.post('/create', createUser)
router.get('/all', getAllUsers)

module.exports = router