var mongoose = require('mongoose');

var cdSchema = new mongoose.Schema({
    title: {
        type: String
    },
    artist:{
        type:String
    },
    country:{
        type:String
    },
    company:{
        type: String
    },
    price:{
        type: String
    },
    year:{
        type: String
    },

});


module.exports = mongoose.model('cd', cdSchema);




