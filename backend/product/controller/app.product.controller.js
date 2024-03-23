const { Product } = require("../../config/models/app.model");
const { product_ValidationCreation, product_ValidationGetting, product_ValidationUpdate } = require("../validation/app.product.validation");

module.exports.CreateProduct = async (req , res) =>{
    const {body} = req;
    ////validation de la donnée
    console.log({...body})
    const {error} = await product_ValidationCreation({...body});
    if(error) return res.status(500).json({message :`ERROR_CREATION_PRODUCT_1 : ${error}`});
    ///creation d'un  product

    Product.create({
        _product_name : body.name , 
        _product_type : body.type,
        _product_stock : JSON.parse(body.stock)
    })
    .then((product)=>{
        res.status(200).json( product)
    })
    .catch((e)=>{
        res.status(500).json({message : `${e}`})
    })
   
    
}



module.exports.getAllProduct = async (req , res) =>{
     //extraction de la donnée
     const {params} = req;
     ////validation de la donnée

    Product.findAll()
    .then((product)=>{
        res.status(200).json(product);
    })
    .catch((e)=>{
        res.status(500).json({message :`ERROR_GETTING_CLIENT_BY_ID : ${e}`});
    });
   
     
     
}





module.exports.getProduct = async (req , res) =>{
    const {body} = req;
    ////validation de la donnée
    const {error} =  product_ValidationGetting(body.name || body.id);
    if(error) return res.status(500).json({message :`ERROR_GETTING_PRODUCT_1 : ${error}`});

    ////recuperation  de la personne chercher
    if(body.id){ 
        ////recuperation de la donnée
        Product.findByPk(body.id)
        .then((product)=>{
            res.status(200).json(product);
        })
        .catch((e)=>{
            res.status(500).json({message :`ERROR_GETTING_PRODUCT_BY_ID : ${e}`});
        });
    } 
    else if(body.name){
        Product.findOne({where:{_product_name : body.name} })
        .then((product)=>{
            res.status(200).json(product);
        })
        .catch((e)=>{
        res.status(500).json({message :`ERROR_GETTING_PRODUCT_BY_NAME : ${e}`});

        });
    }
}





module.exports.updateProduct = async (req , res) =>{


    const {body} = req;
    ////validation de la donnée


    const {error} =  product_ValidationUpdate(body);
    if(error) return res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_1 : ${error}`});

    
    ////recuperation  de la personne chercher
    if(body.name){ 

        Product.findOne({where :{_product_name : body.name}})
       .then((product) =>{
            /////mise a jour de la donnée
            product.update({_product_name : body.new_name});
            res.status(200).json({ message : "RESUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : product} )
       })
       .catch((e)=>{
        ////cas d erreur
        res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_2 : ${e}`});

        });      
    
    } 

    else if(body.type){

        try {
            const productFind =  await Product.findOne({where :{_product_type : body.type}})
            const productUpdate = await productFind.update({_product_type : body.new_type})
            res.status(200).json({ message : "RESUEST_UPDATING_CLIENT_SUCCEEDED ",    value : productUpdate} )

        } catch (error) {
            res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_2 : ${e}`});
        }
         
     
    }
    else if(body.stock){

        Product.findOne({where :{_product_type : body.type}})
        .then((product) =>{

            client.update({_product_type : body.new_type});
            res.status(200).json({ message : "RESUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : product} )
        })
        .catch((e)=>{  res.status(500).json({message :`ERROR_UPDATE_PRODUCT_NAME_2 : ${e}`});  });

    }

}




module.exports.deleteProduct = async (req , res) =>{

    const {body} = req ;
    console.log(body.id);

    if(body.id){
        Product.findByPk(body.id)
        .then((product) =>{
            res.status(200).json({message: "product deleted" , value  : product})
            product.destroy()
        })
        .catch((e) => {
            res.status(500).json({message : "ERROR_UPDATE_CLIENT_NAME_2"+e})
        })
        
    }
    else{
        res.status(500).json({message : "ID_PRODUCT_MISSED"})
    }
}
 








 