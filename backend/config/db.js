const {Sequelize} = require('sequelize');



module.exports.ConnectDB = new Sequelize("gestion_stock" , 'root'  , '',{
    host :'localhost',
    dialect:"mysql"
});


