var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
    Name: { type: 'String', required: true },
    Desc: { type: 'String' },
    Image: { type: 'String' },
});

var Hotel = mongoose.model('Hotel', HotelSchema);



module.exports = Hotel;