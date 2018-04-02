var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express1' });
});

/* GET hotels page. */
router.get('/hotels', function(req, res, next) {
    Hotel.find(function(err, hotels) {
        if (err /*  !=null */ ) return console.err(err);
        res.render('hotels', { title: 'Kamianets-Podilskyi hotels', hotels: hotels });
    });
});

router.get("/setup-db", function(reg, res) {
    var hotels = [{
            Name: "7 Days Hotel",
            Desc: "Цей готель розташований в історичному і культурному центрі Кам'янця-Подільського, лише за 2 км від центрального залізничного вокзалу.",
            Image: "/images/7Days.jpg"
        },
        {
            Name: "U Dominicana",
            Desc: "Готельно-ресторанниий комплекс У Домінікана розташований у Кам'янці-Подільському. До послуг гостей апартаменти з власною кухнею, безкоштовним Wi-Fi, балконом і міні-баром.",
            Image: "/images/Dominicana.jpg"
        }
    ];



    Hotel.remove({}, function(err) {
        if (err) {
            console.error(err);
        } else {
            for (let i = 0; i < hotels.length; i++) {
                Hotel.create(hotels[i], function(err, c) {
                    if (err)
                        console.error('Error:' + err);
                    else
                        console.log(c);
                });
            };

        };
    });

    res.status(200).json({
        message: "Okay",
    });
});

module.exports = router;