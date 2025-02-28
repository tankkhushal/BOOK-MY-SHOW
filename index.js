const express = require ("express");
 
const port = 8005;

const path = require('path');

const app = express();

const Bookshow = require("./config/Bookshow");

const BookMyshow = require("./models/BookModel");

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"assets")));

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use("/",require("./routes/BookMyshowRoutes"));



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.listen(port,(err) =>{
    if(err){
         console.log(err);
    }
    console.log("Sever is Running on port:- " + port);
})