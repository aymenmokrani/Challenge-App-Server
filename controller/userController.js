const User = require("../model/User");

module.exports.createUser = async (req, res, next) => {
    if (!req.body.name) res.send("no name was specified") 
    
    const name = req.body.name
    try {
        const user = await User.create({name})
        console.log(user);
        res.set('Access-Control-Allow-Origin', '*')
        res.send("created")
    } catch (error) {
        if(error.code === 11000) res.send("User already exists")
        res.send(error)
    }
    
    


}