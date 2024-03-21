const { createClient } = require('../controller/app.client.controller');

 
const router =  require('express').Router();

router.post('/createClient' ,createClient );

router.post('/getClient' ,);

router.post('/updateClient' , );

 




module.exports = router;