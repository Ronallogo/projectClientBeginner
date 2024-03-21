const { ConnectDB } = require("../../config/db");
const {Sequelize} = require('sequelize')



module.exports.Client = ConnectDB.define('Client' , {
    _client_id : {
        type :   Sequelize.INTEGER,
        autoIncrement :true,
        allowNull:false,
        primaryKey:true

    },

    _client_name :{
        type :Sequelize.STRING ,
        allowNull :false
    },

    _client_email :{
        type :Sequelize.STRING ,
        allowNull :false
    },
    _client_shopping_date : {
        type: Sequelize.DATE,  
        defaultValue: Sequelize.NOW
    }


})