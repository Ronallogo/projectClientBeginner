 
const { Product } = require("../../config/models/app.model");


/**
 * 
 * @param {number} id 
 */
module.exports.ProductGetterById = async (id)=>{ return Product.findByPk(id)  }


/**
 * 
 * @param {string} name 
 * @returns 
 */
module.exports.ProductGetterByName = async (name)=>{ return Product.findOne({where :{_product_name : name}}) }


/**
 * 
 * @param {string} name 
 * @returns 
 */

module.exports.ProductGetterId = async (name)=>{ return Product.findOne({where :{_product_name : name} , attributes :['_product_id']}) }



/**
 * 
 * @param {number} id 
 * @returns 
 */

module.exports.ProductGetterName = async (id)=>{return Product.findOne({where :{_product_id : id} , attributes :['_product_name']})}

/**
 * 
 * @param {number} id 
 * @returns 
 */


module.exports.ProductGetterTypeByid = async (id)=>{ return Product.findOne({where :{_product_id : id} , attributes :['_product_type']}) }

/**
 * 
 * @param {string} name 
 * @returns 
 */


module.exports.ProductGetterTypeByname = async (name)=>{ return Product.findOne({where :{_product_name : name} , attributes :['_product_type']}) }


/**
 * 
 * @param {number} id 
 * @returns 
 */
module.exports.ProductGetterPriceById = async (id)=>{ return Product.findOne({where :{_product_id : id} , attributes :['_product_price ']})}

/**
 * 
 * @param {number} id 
 * @returns 
 */
module.exports.ProductGetterStockById = async (id)=>{ return Product.findOne({where :{_product_id : id} , attributes :['_product_stock ']})}

/**
 * 
 * @param {string} name 
 * @returns 
 */
module.exports.ProductGetterStockByIName = async (name)=>{ return Product.findOne({where :{_product_name : name} , attributes :['_product_stock ']})}





 











