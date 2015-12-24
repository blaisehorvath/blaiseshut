/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
import express from "express";
import path from "path";
import React from "react";
import ReactApp from "../public/components/ReactApp";
import ReactDOM from "react-dom/server"

/*App*/
let app = express();


/*Constants*/
const appDirName = path.dirname(require.main.filename);

/*Configuring the templating endgine*/
app.set('views', __dirname + '/view');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('index', {content : appContent});
});

app.listen(4444, function () {
    console.log("Development server is listening on port: 4444");
});
