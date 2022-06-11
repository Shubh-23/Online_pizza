const menu = require('../model/Menu.model')
const Promise = require('bluebird')

class Home{
    // InsertMenuData(Item){
    //     var arr = []
    //     return Promise.all(Item).each((params)=>{
    //         let data = {
    //             "name":params.name,
    //             "image":params.image,
    //             "size":params.size,
    //             "price":params.price
    //         }
    //         var HomeData = new menu(data)
    //         return HomeData.save(null).tap((data)=>{
    //             arr.push(data)
    //         })
    //     }).then((csdc)=>{
    //     return arr
    // })
    // }
    InsertMenuData(){
        
        return menu.forge().fetchAll().then((data)=>{
            return data
        })
            
        
    }

}

module.exports = new Home