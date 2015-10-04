"use strict";

/*Modules*/
import express from 'express';
import path from 'path';

/*App*/
const app = express();

/*Constants*/
const appDirName = path.dirname(require.main.filename);

/*Configuring React*/
app.set('views', appDirName+"/views/");
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//setting the static directory
app.use(express.static(appDirName+"/public"));

app.get('/', function (req, res) {
       res.render('home', { name: 'John', title: 'Javascript Algorithms' });
});

app.listen(4444, function () {
    console.log('Server started! \r\nListening on port: 4444');
});
