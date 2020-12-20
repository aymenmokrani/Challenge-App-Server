const router = require('express').Router()


router.get('/getname', (req, res) => {
    res.send("name duuh")
})

module.exports = router