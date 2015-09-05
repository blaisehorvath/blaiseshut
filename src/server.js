'use strict';

const express = require('express')
const handlebars  = require('express-handlebars');
const path = require('path');
const appDirName = path.dirname(require.main.filename);


const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', appDirName+"/views/");

app.get('/', function (req, res) {
    res.render("home", {layout:false,
                        title: "Algorithms in Javascript",
                        headerTitle: "Welcome to the algorithms course in Javascript"
                        });
});

app.listen(4444, function () {
    console.log('Server started!');
    console.log('Listening on port: 4444');
});