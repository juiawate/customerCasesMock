var express = require('express');
var router = express.Router();
var Customers = require('./customersModel');
var Cases = require('./casesModel');
//var Sequelize = require('sequelize');

router.get('/getCap', function(req, res, next) {
    Cases.findAll({
        where: { type: 'cap' }
        /*include: [{
            model: Customers,
            where: {id: sequelize.col('CustomerCases.custId')}
        }]*/
    }).then(function (data) {
        res.status(200).json({capCases: data});
    });
});

router.get('/getHot', function (req, res) {
    Cases.findAll({where: { type: 'hot' }}).then(function (data) {
        res.status(200).json({hotCases: data});
    });
});

router.get('/getOldCases', function (req, res) {
    Cases.findAll({where: { type: 'done' }}).then(function (data) {
        res.status(200).json({oldCases: data});
    });
});

router.get('/getOldCases/:id', function (req, res) {
    Cases.findAll({where: { type: 'done' , custId: req.params.id}}).then(function (data) {
        res.status(200).json({oldCases: data});
    });
});

module.exports = router;
