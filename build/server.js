'use strict';

/*Modules*/
var express = require('express');
var path = require('path');

/*App*/
var app = express();

/*Constants*/
var appDirName = path.dirname(require.main.filename);

/*Configuring React*/
app.set('views', appDirName + "/views/");
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//setting the static directory
app.use(express['static'](appDirName + "/static"));

app.get('/', function (req, res) {
    res.render('home', { name: 'John', title: 'Javascript Algorithms' });
});

app.listen(4444, function () {
    console.log('Server started! \r\nListening on port: 4444');
});