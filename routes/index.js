var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express1' });
});

/* GET countries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Countries' });
});

/* GET prices page. */
router.get('/prices', function(req, res, next) {
    res.render('prices', { title: 'Express3' });
});

/* GET contact page. */

router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Express4' });
});

module.exports = router;