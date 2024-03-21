const express = require("express");
const {ConnectDB} = require("./config/db.js")
const dotenv = require('dotenv').config(); 
const port = 3020;
const app = express();
ConnectDB.sync()
.then('CONNEXION_SUCCEDED')
.catch("CONNEXION_FAILED");
//connectDB();
///middleware qui permet de traiter les données de la request

app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.use('/app/client' , require('./client/route/app.client.route.js'));

///routes 
 

///lancer le server
app.listen(port , ()=> console.log("SERVER_PORT : " + port));