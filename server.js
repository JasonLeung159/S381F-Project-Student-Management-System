const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));


connectDB();

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))


app.post('/login', function(req, res){
        if (req.body.username == "Jason"&& req.body.password == 114514) {
        return res.status(200).redirect("/index");
        }
        console.log("Error username or password.");
        return res.redirect("/");
});

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});