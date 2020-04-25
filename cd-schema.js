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

mongoose.model("CD", cdSchema)

module.exports = mongoose.model('CD', cdSchema);




