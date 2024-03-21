const { Client } = require("../model/app.client.model");
const { client_ValidationCreation } = require("../validation/app.client.validation");


module.exports.createClient  = async (req , res) =>{
    const {body} = req;
    console.log(body);
    const {error} = await client_ValidationCreation({...body});
    if(error) return res.status(500).json({message :`ERROR_CREATION_CLIENT_1 : ${error}`});

    Client.create({...body})
    .then(()=>{
        res.status(200).json(`RESUEST_CREATION_CLIENT_SUCCEEDED `)
    })
    .catch((e)=>{
        res.status(500).json({message :`ERROR_CREATION_CLIENT_2 : ${e}`})
    })
    
     
}
module.exports.getClient  = async (req , res) =>{

}
module.exports.updateClient  = async  (req , res) =>{

}
module.exports.getAllClient  = async (req , res) =>{

}
module.exports.deleteClient  = async (req , res) =>{

}
 



