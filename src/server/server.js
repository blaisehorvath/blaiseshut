/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
import express from "express";
import path from "path";
import React from "react";
import ReactApp from "../public/components/ReactApp";
import ReactDOM from "react-dom/server"
import { Provider } from 'react-redux'
/*App*/
import { combineReducers,createStore } from 'redux';
//import {AppReducer} from "../public/reducers/StoreAndReducers"
import {connect} from "react-redux"
import renderHTML from "./renderHTML"
import AppReducer from "../public/reducers/StoreAndReducers"

let store = createStore(AppReducer);
let app = express();
console.log(store)

/*Constants*/
const appDirName = path.dirname(require.main.filename);

///*Configuring the templating endgine*/
//app.set('views', __dirname + '/view');
//app.set('view engine', 'jsx');
//app.engine('jsx', require('express-react-views').createEngine());

/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));
const initialState = store.getState();
console.log(initialState);
app.get('/', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp/></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});

app.get('/about', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp/></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});

app.get('/contact', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content : appContent});
});

app.get('/blog', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content : appContent});
});

app.get('/projects', (req, res) => {
    "use strict";
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content : appContent});
});

app.listen(3000, function () {
    console.log("Development server is listening on port: 4444");
});
