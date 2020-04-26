const express = require('express');
const html = require("html")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');
const path = require('path');
var cdCtrl = require('./cd-controller')
require('dotenv').config();

var port = (process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));


//Coloca a sua DB aqui em baixo
mongoose.connect( process.env.MONGODB_URL ,
 {useUnifiedTopology: true, useNewUrlParser: true }, 
()=>console.log("It is connected to DB")

);

//Listening to the server
app.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});
