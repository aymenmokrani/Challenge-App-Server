const router = require('express').Router()
const { createUser } = require('../controller/userController')


router.get('/', (req, res) => {
    res.send('we in useres')
})

router.post('/create', createUser)


module.exports = router