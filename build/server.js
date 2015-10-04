"use strict";

/*Modules*/

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('node-jsx').install();

/*App*/
var app = (0, _express2['default'])();

/*Constants*/
var appDirName = _path2['default'].dirname(require.main.filename);

/*Configuring React*/
app.set('views', appDirName + "/views/");
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//setting the static directory
app.use(_express2['default']['static'](appDirName + "/public"));

app.get('/', function (req, res) {
    res.render('home', { name: 'John', title: 'Javascript Algorithms' });
});

app.listen(4444, function () {
    console.log('Server started! \r\nListening on port: 4444');
});