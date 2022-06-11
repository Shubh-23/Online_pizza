const LocalStrategy = require('passport-local').Strategy
const User = require('../model/user.model')
const bycrypt = require('bcrypt')

function init(passport){
    passport.use(new LocalStrategy({ usernameField: 'email' },async(email,password,done)=>{
  
        //Login

        //Check if email exists
        const user = await User.forge().query((qb)=>{qb.where('email', email)}).fetch().then((data)=>{
            
            return JSON.parse(JSON.stringify(data))
        })
     
        if(!user){
            return done(null,false,{messages:'No user with this email'})
        }

        bycrypt.compare(password,user.password).then(match =>{
            if(match){
                return done(null,user,{messages:'Login succesfully'})
            }
            return done(null,false,{messages:'wrong username or password'})
        }).catch(err =>{
            return done(null,false,{messages:'Something went wrong'})
        })
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser((id,done)=>{
    
       
            done(null,id)
        
    })

}

module.exports = init