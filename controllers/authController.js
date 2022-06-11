const authService = require('../services/authServices')
const bycrypt = require('bcrypt')
const passport = require('passport')
class registration{
    
    async registerUser(req,res){
       
        const { name , email, password} = req.body
        if(!name || !email || !password){
            req.flash('error','All fields are required')
            req.flash('name',name)
            req.flash('email',email)
            return res.render('auth/register')
        }else{
            const params = req.body
            const password = req.body.password    
            const hashedPassword = await bycrypt.hash(password,10)    
            return authService.registerUser(params,hashedPassword).then((data)=>{
                if(data == 'error'){
                    req.flash('error','Email already taken')
                    req.flash('name',name)
                    req.flash('email',email)
                    return res.render('auth/register')
                }else{
                    req.flash('error','Your succefully registered')
                    return res.render("auth/login")
                }
            })
        }
    }
        
    loginUser(req,res){
        res.render('auth/login')
    
    }

    postLogin(req,res,next){
        passport.authenticate('local',(err,user,info)=>{
            if(err){
                req.flash('error',info.messages)
                return next(err)
            }
            if(!user){
                req.flash('error',info.messages)
                return res.render('auth/login')
            }
            req.logIn(user,(err)=>{
                if(err){
                    req.flash('error',info.messages)
                    return next(err)
                }
                return res.redirect('/')
            })
        })(req,res,next)


    }
    getRegisterUser(req,res){
        res.render('auth/register')
    }

    logout(req,res){
    
        req.session.destroy()
        req.logout()
        return res.redirect('login')
    }



}



            

            


module.exports = new registration