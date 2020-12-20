const User = require("../model/User");

module.exports.createUser = async (req, res, next) => {

    try {
        const user = await User.create({name: "in server"})
        console.log(user);
        res.send("created")
    } catch (error) {
        console.log(error.message);
    }


}