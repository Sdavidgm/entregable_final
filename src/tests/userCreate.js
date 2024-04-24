const User = require("../models/User")

const userCreate = async()=>{
    const user ={
        firstName: "Santiago",
        lastName: "Guaman",
        email:"santiago@gmail.com",
        password: "12345",
        phone:"1255355"

    }

    await User.create(user)

    
}

module.exports = userCreate