const homeServices = require('../services/homeServices')
const Promise = require('bluebird')

class home{
    InsertMenuData(req,res){
        const params = req.body
        return Promise.resolve(homeServices.InsertMenuData()).then((data)=>{
            const data1 = JSON.parse(JSON.stringify(data.models))
            return res.render('home',{pizzas:data1})
           })
    }
}

module.exports = new home