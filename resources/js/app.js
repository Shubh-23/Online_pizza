 import axios from 'axios'
import Noty from 'noty'
import {initAdmin} from './'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(pizza) {
    
    axios.post('/update-cart', pizza).then(res => {
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type:'success',
            timeout: 1000,
            text: 'item added to cart',
            progressBar: false
        }).show();

        

    })
}

addToCart.forEach((btn) => {
 btn.addEventListener('click', (e) => {
    let pizza = JSON.parse(btn.dataset.pizza)
    updateCart(pizza)
 })
})

//Remove alert message after some seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(() =>{
        alertMsg.remove()
    },2000)
}

initAdmin()