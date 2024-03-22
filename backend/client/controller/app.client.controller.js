const { Client } = require("../model/app.client.model");
const { client_ValidationCreation, client_ValidationGetting, client_ValidationUpdate } = require("../validation/app.client.validation");


module.exports.createClient  = async (req , res) =>{
    //extraction de la donnée
    const {body} = req;
    ////validation de la donnée
    const {error} = await client_ValidationCreation({...body});
    if(error) return res.status(500).json({message :`ERROR_CREATION_CLIENT_1 : ${error}`});
    ///creation d'un  client
    Client.create({...body})
    .then((client)=>{
        res.status(200).json(`RESUEST_CREATION_CLIENT_SUCCEEDED \n : ${client} `)
    })
    .catch((e)=>{
        res.status(500).json({message :`ERROR_CREATION_CLIENT_2 : ${e}`})
    })
    
     
}

module.exports.getClient  = async (req , res) =>{
    //extraction de la donnée
    const {body} = req;
    ////validation de la donnée
    const {error} =  client_ValidationGetting(body.name || body.id);
    if(error) return res.status(500).json({message :`ERROR_GETTING_CLIENT_1 : ${error}`});

    ////recuperation  de la personne chercher
    if(body.id){ 
        ////recuperation de la donnée
        Client.findByPk(body.id)
        .then((client)=>{
            res.status(200).json(client);
        })
        .catch((e)=>{
            res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_ID : ${e}`});
        });
    } 
    else if(body.name){
        Client.findOne({where:{_client_name : body.name} })
        .then((client)=>{
            res.status(200).json(client);
        })
        .catch((e)=>{
        res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_NAME : ${e}`});

        });
    }
       
    
      
}


module.exports.updateClient  = async  (req , res) =>{
    const {body} = req;
    ////validation de la donnée

    const {error} =  client_ValidationUpdate(body);
    if(error) return res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_1 : ${error}`});

    ////recuperation  de la personne chercher
    if(body.name){ 

        Client.findOne({where :{_client_name : body.name}})
       .then((client) =>{
            /////mise a jour de la donnée
            client.update({_client_name : body.new_name});
            res.status(200).json({ message : "RESUEST_UPDATING_CLIENT_SUCCEEDED ",    value : client} )
       })
       .catch((e)=>{
        ////cas d erreur
        res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_2 : ${e}`});

        });      
    
    } 

    else if(body.email){
        Client.findOne({where :{_client_email : body.email}})
        .then((client) =>{
            client.update({_client_email : body.new_email});
            res.status(200).json({ message : "RESUEST_UPDATING_CLIENT_SUCCEEDED ",    value : client} )
        })
        .catch((e)=>{
            res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_2 : ${e}`});

        });
    }
}




module.exports.getAllClient  = async (req , res) =>{


     //extraction de la donnée
     const {params} = req;
     ////validation de la donnée

    Client.findAll()
    .then((client)=>{
        res.status(200).json(client);
    })
    .catch((e)=>{
        res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_ID : ${e}`});
    });
   
     
     
 
     ////recuperation  de la personne chercher
     
}



module.exports.deleteClient  = async (req , res) =>{

    const {body} = req;
    ////validation de la donnée
    const {error} =  client_ValidationGetting(body.name || body.id);
    if(error) return res.status(500).json({message :`ERROR_GETTING_CLIENT_1 : ${error}`});

    ////recuperation  de la personne chercher
    if(body.id){ 
        ////recuperation de la donnée
        Client.findByPk(body.id)
        .then((client)=>{
            res.status(200).json({message : "client deleted" , value : client});
            client.destroy();
        })
        .catch((e)=>{
            res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_ID : ${e}`});
        });
    } 
    else if(body.name){
        Client.findOne({where:{_client_name : body.name} })
        .then((client)=>{
            res.status(200).json({message : "client deleted" , value : client});
            client.destroy();
        })
        .catch((e)=>{
        res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_NAME : ${e}`});

        });
    }
       

}
 



