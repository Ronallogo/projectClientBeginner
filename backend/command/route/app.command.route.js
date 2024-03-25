const { CreateCommand } = require('../controller/app.command.controller');

 
const router =  require('express').Router();






router.post('/createCommand' ,CreateCommand );

//router.get('/getProduct' ,getProduct);

//router.get('/getAllProduct' ,getAllProduct);

//router.put('/updateProduct' ,  updateProduct );

//router.delete('/deleteProduct' , deleteProduct);

module.exports = router ;
