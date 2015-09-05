'use strict';

var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');
var appDirName = path.dirname(require.main.filename);

var app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', appDirName + "/views/");

app.get('/', function (req, res) {
    res.render("home", { layout: false, title: "Welcome to the algorithms course in Javascript" });
});

app.listen(4444, function () {
    console.log('Server started!');
    console.log('Listening on port: 4444');
});