
var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'dev', 'juiAwate', {
    host: 'localhost',
    dialect: 'mysql'
});

var Cases = sequelize.define('CustomerCases', {
    custId: {
        type: Sequelize.STRING
        /*type: Sequelize.INTEGER,
        references: {
            model: 'Customers',
            key: 'id'
        }*/
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    text: {
        type: Sequelize.TEXT('long')
    },
    status: {
        type: Sequelize.ENUM,
        values: ['cap', 'hot', 'done']
    }
},
    {
    indexes: [
        {
            name: 'hotCases_Idx',
            fields: ['custId', 'status'],
            where: {
                status: 'hot'
            }
        },
        {
            name: 'capCases_Idx',
            fields: ['custId', 'status'],
            where: {
                status: 'cap'
            }
        },
        {
            name: 'oldCases_Idx',
            fields: ['custId', 'status'],
            where: {
                status: 'old'
            }
        }
    ]
});

//Cases.sync({force: true});

sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust1', '2013-08-30 19:05:00', 'some data', 'cap', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");
sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust2', '2013-08-30 19:05:00', 'some data', 'hot', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");
sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust3', '2013-08-30 19:05:00', 'some data', 'cap', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");
sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust4', '2013-08-30 19:05:00', 'some data', 'hot', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");
sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust1', '2013-08-30 19:05:00', 'some data', 'done', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");
sequelize.query("INSERT INTO `test`.`customerCases` (`custId`, `date`, `text`, `status`, `createdAt`, `updatedAt`) VALUES ('Cust2', '2013-08-30 19:05:00', 'some data', 'done', '2013-08-30 19:05:00', '2013-08-30 19:05:00');");


module.exports = Cases;