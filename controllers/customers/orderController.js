const orderServices = require('../../services/orderServices')
const moment = require('moment')

class orders{
    orderPizza(req,res){
    
        const {phone, address}= req.body
        if(!phone || !address){
            req.flash('error','All fields are required')
            return res.redirect('/cart')
        }

        const data = ({
            "user_id":req.user,
            "order_status":"order deliver",
            "phone":phone,
            "address":address
        })
        const items=req.session.cart.items
        const item = []
        for(let i in items){
            item.push(items[i])
        }
        new Promise((resolve,reject)=>{
        resolve(orderServices.orderPizza(data,item))}).then((data)=>{
        if(data){
            req.flash('success','Order placed successfully')
            delete req.session.cart
            return res.redirect('/customers/orders')
        }else{
            req.flash('error','Something went wrong')
            return res.redirect('/cart')
            }
        })
    }
    
    index(req,res){
        const params = req.user
        orderServices.indexService(params).then((data)=>{
            console.log(data)
          return res.render('customers/orders',{orders:data,moment:moment})

        })
         
    }


   
}
module.exports = new orders

