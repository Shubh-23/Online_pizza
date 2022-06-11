const adminServices = require('../../services/adminServices')



class adminOrder{
    index(req,res){
        
    return adminServices.index().then((data)=>{
        return res.json(data)
        
    })
}
}

module.exports = new adminOrder