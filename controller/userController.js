const User = require("../model/User");



// GET
module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({})  
        res.send(users)  
    } catch (error) {
        res.status(400).send(error.message)
    }    
}

// POST
module.exports.createUser = async (req, res, next) => {
    if (!req.body.name) res.status(400).send("no name was specified") 

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

// PUT
module.exports.updateUser = async (req, res, next) => {
    if (!req.body.name) res.status(400).send("no name was specified") 

    const oldName = req.params.id
    const newName = req.body.name
    try {
        const update = await User.updateOne({name: oldName}, {name: newName})
        if (update.n) res.send("user was updated")
        else res.status(400).send("user wasn't update")
    } catch (error) {
        if(error.code === 11000) {res.status(400).send("User with this name already exists")}
        else {res.status(400).send(error.message)}
    }
}

//DELETE
 //ALL
module.exports.deleteAllUsers = async (req, res, next) => {
    try {
        await User.deleteMany({})
        res.send("all documents are deleted")
    } catch (error) {
        res.status(400).send(error.message)
    }
}
 //ONE
module.exports.deleteOne = async (req, res, next) => {
    const name = req.params.id

    try {
        const deleted = await User.deleteOne({name})
        if (!deleted.deletedCount) {res.status(400).send("no user was deleted")}
        else {res.send("User was deleted");    }
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}