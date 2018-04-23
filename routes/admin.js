var express = require('express');
var router = express.Router();
var Country = require('../models/country');


router.get('/', function(req, res, next) {
    //вивести меню з усіма можливими функціями
    res.render('admin/index', {
        layout: 'admin/layout',
        title: 'Admin Panel'
    });
});

router.get('/countries', function(req, res, next) {
    Country.find({}, function(err, countries) {
        if (err) {
            console.error('Error: ' + err);
            res.render('admin/country-res', {
                title: 'Error І',
                message: err
            });
        } else {
            res.render('admin/countries', {
                layout: 'admin/layout',
                title: 'Add country',
                countries: countries
            });
        }
    });
});
router.get('/countries-add', function(req, res, next) { //Додати країну    
    res.render('admin/countries-add', { layout: 'admin/layout', title: 'Add country' });
});

router.post('/countries-add', function(req, res) { //виводимо повідомлення про вдале чи невдале введення країни
    Country.remove({ Name: req.body.countryName }, function(err) {
        if (err) {
            console.error(err);
            res.render('admin/country-res', { layout: 'admin/layout', title: 'Error!', message: err });
        } else {
            Country.create({
                Name: req.body.countryName,
                Desc: req.body.countryDescription,
                Image: req.body.ImageUrl
            }, function(err, c) {
                if (err) {
                    console.error('Error:' + err);
                    res.render('admin/country-res', { layout: 'admin/layout', title: 'Error!', message: err });
                } else
                    res.render('admin/country-res', { layout: 'admin/layout', title: 'Super!', message: 'Country added to DB succesfully' });
            });
        };
    });
});

module.exports = router;