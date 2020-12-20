const router = require('express').Router()
const { createUser } = require('../controller/userController')


router.get('/', (req, res) => {
    res.send('we in useres')
})

router.get('/create', createUser)


module.exports = router