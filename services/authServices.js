const user = require('../model/user.model')
class register{
    registerUser(params,hashedPassword){
        let data = { 
            name : params.name,
            email : params.email,
            password : hashedPassword,
            status : "1",
        }
        const User = new user(data)
        return User.save(null).tap((data)=>{
            return data
        }).catch((err)=>{
            return "error"
        })

    }
}

module.exports = new register