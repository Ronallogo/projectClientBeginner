const {Product} = require("../../config/models/app.model");
const { ProductGetterById, ProductGetterByName } = require("../getter_setter/app.product.getter");
const { ProductSetterName, ProductSetterType, ProductSetterPrice } = require("../getter_setter/app.product.setter");
const { product_ValidationCreation, product_ValidationGetting, product_ValidationUpdate } = require("../validation/app.product.validation");

module.exports.CreateProduct = async (req , res) =>{
    const {body} = req;
    ////validation de la donnée
  
    const {error} = await product_ValidationCreation({...body});
    if(error) return res.status(500).json({message :`ERROR_CREATION_PRODUCT_1 : ${error}`});
    ///creation d'un  product

    Product.create({
        _product_name : body.name , 
        _product_type : body.type,
        _product_stock : JSON.parse(body.stock),
        _product_price : JSON.parse(body.price)
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

    
    try {
        if(body.id){ 
            ////recuperation de la donnée
          const productFindById = await ProductGetterById(body.id);
          /////ckeck if the value is empty
         (productFindById)? res.status(200).json(productFindById): res.status(500).json({message : 'product not found'});
        } 
        else if(body.name){
            ///same thing like above
            const productFindByName = await ProductGetterByName(body.name);
            (productFindByName)? res.status(200).json(productFindByName): res.status(500).json({message : 'product not found'});

        }
    } catch (error) {
        res.status(500).json({message : 'something is going on  badly  in  getting product' , value :e})
    }
}





module.exports.updateProduct = async (req , res) =>{


    const {body} = req;
    ////validation de la donnée


    const {error} =  product_ValidationUpdate(body);
    if(error) return res.status(500).json({message :`ERROR_UPDATE_CLIENT_NAME_1 : ${error}`});

    
    ////recuperation  de la personne chercher
    //// ENTITY PEUT ETRE LE NOM OU ID //////
    try {

        if(body.entity && body.new_name){ 
            //// get the product with modification 
            const productModified  = await ProductSetterName(body.name , body.new_name);
            /////response
            res.status(200).json({ message : "REQUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : productModified} );
            
     
            

        } 
    
        else if(body.new_type && body.entity){
                /////get the product with the updated Type 
                
                const productModified = await  ProductSetterType( body.new_type , body.entity);
                ////response
                res.status(200).json({ message : "REQUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : productModified} );
                
     
         
        }
        else if(body.new_stock && body.entity){
            ///get product with the modified stock
            const productModified = await  ProductSetterType(body.new_stock , body.entity);
            ////response
            res.status(200).json({ message : "REQUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : productModified} );
           
             
    
        }
        else if(body.new_price && body.entity){
            const productModified = await  ProductSetterPrice(body.new_price, body.entity);
            ////response
            res.status(200).json({ message : "REQUEST_UPDATING_PRODUCT_SUCCEEDED ",    value : productModified} );
        }
    } catch (error) {

        res.status(500).json({message :`ERROR_UPDATE_PRODUCT_: ${error}`});
    }

}




module.exports.deleteProduct = async (req , res) =>{

    const {body} = req ;
  

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
 








 