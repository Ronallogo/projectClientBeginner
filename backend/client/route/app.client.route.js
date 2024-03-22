const { createClient, getClient, getAllClient, updateClient, deleteClient } = require('../controller/app.client.controller');

 
const router =  require('express').Router();

router.post('/createClient' ,createClient );

router.get('/getClient' ,getClient);

router.get('/getAllClient' ,getAllClient);

router.put('/updateClient' ,  updateClient );

router.delete('/deleteClient' , deleteClient);

 




module.exports = router;