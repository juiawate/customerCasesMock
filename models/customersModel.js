
var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'dev', 'juiAwate', {
    host: 'localhost',
    dialect: 'mysql'
});

var Customers = sequelize.define('Customers',{
    custName: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    }
}, {
    indexes: [
        {
            name: 'cust_Idx',
            fields: ['custName']
        },
        {
            name: 'activeCust_Idx',
            fields: ['custName', 'status'],
            where: {
                status: 1
            }
        }
    ]
});

//Customers.sync({force: true});

module.exports = Customers;