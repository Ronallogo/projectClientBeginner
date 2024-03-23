const { ConnectDB } = require("../db");
const {Sequelize} = require('sequelize')



const Client = ConnectDB.define('Client' , {
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


});


const Product = ConnectDB.define('Product' , {
    _product_id : {
        type :   Sequelize.INTEGER,
        autoIncrement :true,
        allowNull:false,
        primaryKey:true

    },

    _product_name :{
        type :Sequelize.STRING ,
        allowNull :false
    },

    
    _product_type :{
        type :Sequelize.STRING ,
        allowNull :false,
        defaultValue : "Unknown"
    },

    _product_stock :{
        type :Sequelize.INTEGER,
        allowNull :false,
        defaultValue : 0
    },

    _product_stock_date : {
        type: Sequelize.DATE,  
        defaultValue: Sequelize.NOW
    }


});

const Command = ConnectDB.define('Command' , {
    _command_id : {
        type :   Sequelize.INTEGER,
        autoIncrement :true,
        allowNull:false,
        primaryKey:true

    },

    _nbr_product_sold :{
        type :Sequelize.INTEGER ,
        allowNull :false
    },

    _command_date : {
        type: Sequelize.DATE,  
        defaultValue: Sequelize.NOW
    }



})
Client.hasMany(Command);
Command.belongsTo(Client);

Product.hasMany(Command);
Command.belongsTo(Product);

 
module.exports =  {Client , Command , Product}





