var mongoose = require('mongoose');

var LostItemSchema = new mongoose.Schema({
    macAddress: String,
    phoneNumber: String,
    description: String,
    bounty: String

    // ,

    // name: String,
    // completed: Boolean,
    // note: String
}, {versionKey: false});


module.exports = mongoose.model('LostItem', LostItemSchema);