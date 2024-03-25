const Joi = require("joi");

module.exports.Command_ValidationCreation  = async (body) =>{
    const schemaCommand = Joi.object({
        client_name : Joi.string().min(1).max(40).trim().required(),
        product_name  : Joi.string().min(1).max(40).trim().required(),
        nbrProduct : Joi.number(),
        


    })

    return schemaCommand.validate(body);
}