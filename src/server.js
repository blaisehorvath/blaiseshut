'use strict';

const express = require('express')
const handlebars  = require('express-handlebars');
const path = require('path');

//the absolute location of this file
const appDirName = path.dirname(require.main.filename);

const app = express();

//configuring handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
//setting the view engine of the app
app.set('view engine', 'handlebars');
//setting up the folder where the app looks up views
app.set('views', appDirName+"/views/");
//setting the static directory
app.use(express.static(appDirName+"/static"));

app.get('/', function (req, res) {
    res.render("home", {
                              layout:false,
                              title: "Algorithms in Javascript",
                              headerTitle: "Welcome to the algorithms course in Javascript"
                        });
});

app.listen(4444, function () {
    console.log('Server started! \r\nListening on port: 4444');
});
