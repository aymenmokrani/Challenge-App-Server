const router = require('express').Router()
const { createUser } = require('../controller/userController')


router.get('/', (req, res) => {
    res.send('we in useres')
})

router.post('/create', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    next()
}, createUser)


module.exports = router