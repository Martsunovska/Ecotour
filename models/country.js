var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({
    Name: { type: 'String', required: true },
    Desc: { type: 'String' },
    Image: { type: 'String' },
});

var Country = mongoose.model('Country', CountrySchema);



module.exports = Country;