 
const { Product } = require("../../config/models/app.model");
const { ProductGetterByName, ProductGetterById } = require("./app.product.getter");

 /**
  * 
  * @param {string} new_data
  * @param {number | string} entity 
  * @returns 
  */

module.exports.ProductSetterName =  async (new_name , entity) => {
    /// trouver le produit par le nom
        try {

            let id = JSON.parse(entity);
            const product = await ProductGetterById(id);
            return product.update({_product_name : new_name}) ;

        } catch (error) {
            
            const product = await ProductGetterByName(entity);
            return product.update({_product_name : new_name})
        }

    
        
    
}

 /**
  * 
  * @param {string} new_type
  * @param {string | number} entity 
  * @returns 
  */

module.exports.ProductSetterType =  async (new_type , entity) => {
    try {

        let id = JSON.parse(entity);
        const product = await ProductGetterById(id);
        return product.update({_product_type : new_type}) ;

    } catch (error) {
        
        const product = await ProductGetterByName(entity);
        return product.update({_product_type : new_type})
    }

}
/**
 * 
 * @param {string} new_stock 
 * @param {number | number} entity 
 * @returns 
 */
module.exports.ProductSetterStock =  async (new_stock  , entity) => {

    try {

        let id = JSON.parse(entity);
        const product = await ProductGetterById(id);
        return product.update({_product_type : new_stock})  ;

    } catch (error) {
        
        const product = await ProductGetterByName(entity);
        return product.update({_product_type : new_stock})
    }





}



/**
 * 
 * @param {string} new_stock 
 * @param {number | number} entity 
 * @returns 
 */
module.exports.ProductSetterPrice =  async (new_price  , entity) => {

    try {

        let id = JSON.parse(entity);
        const product = await ProductGetterById(id);
        return product.update({_product_price :JSON.parse(new_price)}) ;

    } catch (error) {
        
        const product = await ProductGetterByName(entity);
        return product.update({_product_price : JSON.parse(new_price)});
    }

}



module.exports.Product =  async () => {}
module.exports.Product =  async () => {}
module.exports.Product =  async () => {}
module.exports.Product =  async () => {}
module.exports.Product =  async () => {}























