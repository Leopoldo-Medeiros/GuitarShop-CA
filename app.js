const express = require('express');
const html = require("html")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');
const path = require('path');
var cdCtrl = require('./cd-controller')

app.use(express.urlencoded({ extended: true }));
var port = (process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTES
app.get('/', cdCtrl.getCDs);
app.post('/', cdCtrl.createCD);


//Coloca a sua DB aqui em baixo
mongoose.connect( 'mongodb+srv://test:ccttestuser@cluster0-sahjv.mongodb.net/test?retryWrites=true&w=majority' ,
 {useUnifiedTopology: true, useNewUrlParser: true }, 
()=>console.log("It is connected to DB")

);

//Listening to the server
app.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});
