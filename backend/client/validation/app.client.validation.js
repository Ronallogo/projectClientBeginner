const Joi = require("joi");

module.exports.client_ValidationCreation  = async (body) =>{
    const schamaClient = Joi.object({
        _client_name  : Joi.string().min(1).max(40).trim().required(),
        _client_email  : Joi.string().min(7).max(40).trim().required(),

    });

    return schamaClient.validate(body);
}
module.exports.client_Validation  = async (body) =>{

}
module.exports.client_Validation  = async () =>{

}
module.exports.client_Validation  = async () =>{

}
module.exports.client_Validation  = async () =>{

}





