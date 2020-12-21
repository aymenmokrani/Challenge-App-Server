const User = require("../model/User");

module.exports.createUser = async (req, res, next) => {
    if (!req.body.name) res.send("no name was specified") 

    const name = req.body.name
    try {
        const user = await User.create({name})
        console.log(user);
        res.send("created")
    } catch (error) {
        if(error.code === 11000) {res.status(400).send("User already exists")}
        else {res.status(400).send(error.message)}
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({})  
        res.send(users)  
    } catch (error) {
        res.status(400).send(error.message)
    }    
}

module.exports.deleteAllUsers = async (req, res, next) => {
    try {
        await User.deleteMany({})
        res.send("all documents are deleted")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

