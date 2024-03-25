const { Command , Product , Client } = require("../../config/models/app.model");
const { Command_ValidationCreation } = require("../validation/app.command.validation");

 



module.exports.CreateCommand = async (req , res)=>{
    const {body} = req;
    ///validation de la command
    const {error} = await Command_ValidationCreation({...body});
    if(error) return res.status(500).json({message :`ERROR_CREATION_COMMAND_1 : ${error}`});
    ///creation d'un  product

    const data = {
        "productName" : body.product_name , 
        "clientName" :body.client_name ,
        "nbrProduct" : body.nbr_product
    };


    const idClient = await Client.findOne({where  : {_client_name  : data['clientName']} , attributes : ['_client_id'] });
    const product = await Product.findOne({where  : {_product_name : data['productName']} , attributes : ['_product_id' , '_product_price'] });
    const productPrice = {...product};
    const priceCommand =   product['_product_price'] * data['nbrProduct']
    
     
    


    

    
}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async (req , res)=>{

}
module.exports.Command = async ()=>{

}
module.exports.Command = async ()=>{

}
module.exports.Command = async ()=>{

}
module.exports.Command = async ()=>{

}









