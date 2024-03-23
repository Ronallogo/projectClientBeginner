const { CreateProduct, getAllProduct, getProduct, updateProduct, deleteProduct } = require('../controller/app.product.controller');
const router =  require('express').Router();






router.post('/createProduct' ,CreateProduct );

router.get('/getProduct' ,getProduct);

router.get('/getAllProduct' ,getAllProduct);

router.put('/updateProduct' ,  updateProduct );

router.delete('/deleteProduct' , deleteProduct);

 




module.exports = router;