const User = require("../model/User");

module.exports.createUser = async (req, res, next) => {
    if (!req.body.name) res.send("no name was specified") 

    const name = req.body.name
    try {
        const user = await User.create({name})
        console.log(user);
        res.send("created")
    } catch (error) {
        if(error.code === 11000) res.send("User already exists")
        res.status(400).send(error)
    }
    
    


}

