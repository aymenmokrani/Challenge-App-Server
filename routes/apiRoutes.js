const router = require('express').Router()


router.get('/getname', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send("name duuh")
})

module.exports = router