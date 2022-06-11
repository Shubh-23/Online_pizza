

class cart_Controller{
    updateCart(req,res){
        const params = req.body
        // let cart = {
        //     items:{
        //         pizzaId:{ item: pizzaObject,qty:0}
        //     }
        // }
// for the first time creating cart and adding basic object structure
        if(!req.session.cart){
            req.session.cart = {
                items: {},
                totalQty:0,
                totalPrice: parseInt(0)
            }
        }       
            let cart = req.session.cart
            //Check if item does not exist in cart
            if(!cart.items[req.body.id]){
                cart.items[req.body.id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price)
            }else{
                console.log('else')
                cart.items[req.body.id].qty = cart.items[req.body.id].qty + 1
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price) 
            }
            return res.json({ totalQty: req.session.cart.totalQty})

        }
        
    index(req,res){
        res.render('customers/cart')
    }    

}


    




module.exports = new cart_Controller

  