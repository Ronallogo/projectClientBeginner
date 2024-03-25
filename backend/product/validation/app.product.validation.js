const Joi = require("joi");

module.exports.product_ValidationCreation  = async (body) =>{
    const schemaProduct = Joi.object({
        name  : Joi.string().min(1).max(40).trim().required(),
        type  : Joi.string().min(1).max(40).trim().required(),
        stock : Joi.number(),
        price : Joi.number()


    });

    return schemaProduct.validate(body);
}



module.exports.product_ValidationGetting  = async (body) =>{
    const schemaProduct = Joi.object({
        _client_identify  : Joi.string().min(1).max(40).trim().required(),
    });

    return schemaProduct.validate(body.name || body.id);

}



module.exports.product_ValidationUpdate = async (body) =>{
    const schemaProduct = Joi.object({
        entity : Joi.string().min(1).max(40).trim().required() || Joi.number().min(1).max(40).trim().required() ,
        new_data  : Joi.string().min(1).max(40).trim().required() || Joi.number().min(1).max(40).trim().required(),
        

    });

    return schemaProduct.validate(body);

}
 

