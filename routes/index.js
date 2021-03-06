var express = require('express');
var router = express.Router();
var Country = require('../models/country');
const nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express1' });
});

/* GET countries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Ajax Demo', layout: 'layout1' })

    /*  Country.find(function(err, countries) {
         if (err /* !=null ) return console.err(err);
         res.render('countries', { title: 'Країни', countries: countries });
     }); */
});

router.get("/setup-db", function(reg, res) {
    var countries = [{
            Name: "ФРАНЦІЯ",
            Desc: "Фра́нція — держава на заході Європи, республіка, що межує на північному сході з Бельгією, Люксембургом і Німеччиною, на сході з Німеччиною, Швейцарією, південному-заході з Іспанією й Андоррою, на південному-сході з Італією та Монако на півдні омивається Середземним морем, на заході — Атлантичним океаном.",
            Image: "/images/france.jpg"
        },
        {
            Name: "ШВЕЙЦАРІЯ",
            Desc: "Швейца́рія — нейтральна федеративна республіка в Західній Європі. Датою створення Швейцарської Конфедерації вважають 1 серпня 1291 року, коли три лісові кантони (землі): Урі, Швіц і Унтервальден, відстоюючи незалежність від Габсбурґів, уклали заради оборони «вічний союз» (в рамках «Священної Римської імперії»).            Як самостійна держава Швейцарія одержала міжнародне визнання за Вестфальським миром 1648 року.",
            Image: "/images/Schweiz.jpg"
        },
        {
            Name: "НІМЕЧЧИНА",
            Desc: "Німе́ччина — країна в Центральній Європі, демократична федеративна республіка. Складається з 16 федеральних земель. Столиця і найбільше місто країни — Берлін. Займає площу 357 021 км². Клімат помірний сезонний. Населення — 81,8 млн осіб. Член Європейського Союзу та НАТО. Країна з найбільшою кількістю      населення і найбільшим рівнем економіки в Європейському союзі. Провідна політична сила на Європейському континенті,технологічний лідер в багатьох галузях. Німеччина є другим за популярністю місцем міграції в світі, поступаючись тільки США.",
            Image: "/images/germany.jpg"
        },
        {
            Name: "ЯПОНІЯ",
            Desc: "Японія — острівна країна, розташована на східному узбережжі Азії, у північно-західній частині Тихого океану.Зі сходу і півдня її омиває Тихий океан, з заходу — води Японського та Східнокитайського морів, а з півночі — Охотське море. Японський архіпелаг простягнувся дугою з північного сходу на південний захід і налічує чотири великих острови Хоккайдо, Хонсю, Сікоку та Кюсю, які складають 97 % поверхні суходолу і 6848 менших островів. Країна лежить у зоні помірного кліматичного поясу.",
            Image: "/images/japan.jpg"
        },
        {
            Name: "НІДЕРЛАНДИ",
            Desc: "Нідерла́нди — країна на заході Європи на березі Північного моря. Частина, офіційно Королі́вства Нідерла́ндів (нід. Koninkrijk der Nederlanden), котре складається з західноєвропейської території та Карибських островів Бонайре, Саба та Сінт-Естатіус, разом з островами Аруба, Кюрасао та Сінт-Мартен (які мають особливий статус). Часто країну неофіційно називають Голландією за назвою однієї з семи провінцій, що спочатку входила в Республіку Сполучених провінцій Нідерландів у XVI столітті.",
            Image: "/images/Nederland.jpg"
        },
        {
            Name: "ШОТЛАНДІЯ",
            Desc: "Шотла́ндія — країна, частина Об'єднаного Королівства, колись незалежна держава. Займає північну частину Великої Британії, на півдні межує з Англією, на сході її береги омиває Північне море, на півночі й заході Атлантичний океан, на південному заході — Північна протока та Ірландське море. Окрім того, Шотландія складається ще із близько 790 островів[4], серед яких архіпелаги Шетландські, Оркнейські та Гебридські острови.",
            Image: "/images/Scottish.jpg"
        }
    ];



    Country.remove({}, function(err) {
        if (err) {
            console.error(err);
        } else {
            /* Country.insertMany(countries, function(err, docs) { /* переписати цей код за допомогою циклу  
            if (err) {
                console.error(err);
            } else
                console.log('Inserted' + docs.length);
        }); */
            for (let i = 0; i < countries.length; i++) {
                Country.create(countries[i], function(err, c) {
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

/* GET prices page. */
router.get('/prices', function(req, res, next) {
    res.render('prices', { title: 'Express3' });
});

/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Contacts Us' });
});

router.post('/contacts', function(req, res, next) {
    //відправка листа //експериментувати з полем TO. дві адреси.
    var message = {
        from: req.body.email,
        to: 'vip@lasunkaplus.com, alrami_07@mail.ru',
        subject: 'Message from Ecotour [' + req.body.name + ']',
        text: req.body.message,
        html: '<p>' + req.body.message + '</p>'
    };
    console.log(message);
    // res.render('contacts-res', { title: 'Contacts Us' });
    if (req.body.human === "5") {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "chinatsu079@gmail.com",
                pass: ""
            }
        });
        // send mail with defined transport object
        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(info);
            res.render('contacts-res', { title: 'Contacts:', message: "Лист віправлено!" })
        });

    } else {
        res.render('contacts-res', { title: 'Contacts Us', message: "Ви мабуть робот!" });
    }
});

module.exports = router;