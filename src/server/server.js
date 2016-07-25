/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
var http = require('http');
import AWS from "aws-sdk";
import express from "express";
import path from "path";
import React from "react";
import ReactApp from "../public/components/ReactApp";
import About from "../public/components/About"
import Admin from "../public/components/Admin"
import ReactDOM from "react-dom/server"
import { Provider } from 'react-redux'
/*App*/
import bodyParser from 'body-parser'
import {createStore } from 'redux';
import renderHTML from "./renderHTML"
import AppReducer from "../public/reducers/StoreAndReducers"
import cookieParser from "cookie-parser"
import bcrypt from "bcrypt"
let store = createStore(AppReducer);
let app = express();
console.log(store);

/*Constants*/
const appDirName = path.dirname(require.main.filename);

/* Setting up encryption etc...*/
let admins = {
    Viktor:{

        hash:"",
        salt:""
    },
    Blaise:{
        hash:"",
        salt:""
    }}

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const saltRounds=10;
bcrypt.genSalt(saltRounds,(err,salt)=>
    {
        admins.Viktor.salt=salt
        bcrypt.hash("qwertz",salt,(err,hash)=> {admins.Viktor.hash=hash})
    }
)
bcrypt.genSalt(saltRounds,(err,salt)=>
    {
        admins.Blaise.salt=salt
        bcrypt.hash("Seabythelive",salt,(err,hash)=>{admins.Blaise.hash=hash})
    }
)

let user = "Viktor"
if(user in admins){
    console.log(admins[user]);
}else console.log("lofasz\n")
///*Setting up amazon AWS connection.
// Should have a credentials file in ~/.aws with the following content:
/*[default]

aws_access_key_id = "Your access key id"

aws_secret_access_key = "Your secret access key
These keys can be obtained from the IAM console/Users/Your User/Security Credentials/Create Acess key
The DB is obtained by the parameters in app_config.json/*/
//var config = fs.readFileSync('./server/app_config.json', 'utf8');
//TODO: EXPORT to standalone file gulp etc.
// var config = {
//     "AWS_REGION": "eu-central-1",
//     "STARTUP_SIGNUP_TABLE": "testing"
// };
// var db = new AWS.DynamoDB({region: config.AWS_REGION});
// var idnum = 0;
// var formData = {
//     TableName: config.STARTUP_SIGNUP_TABLE,
//     Item: {
//         id: {'N': (idnum++).toString()},
//         msg: {'S': "Initial stuff"},
//     }
// };
// db.putItem(formData, function(err, data) {
//     if (err) {
//         console.log('Error adding item to database: ', err);
//     } else {
//         console.log('Form data added to database.');
//     }});
/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));
const initialState = store.getState();
console.log(initialState);
app.get('/', (req, res) => {
    "use strict";
    // THIS IS FOR TESTING THE DB, MANUAL ERASE REQUIRED!!!
    //  formData.Item.id={'N': (idnum++).toString()};
    //  formData.Item.msg={'S': "GET"+req.path};
    //  db.putItem(formData, function(err, data) {
    //  if (err) {
    //  console.log('Error adding item to database: ', err);
    //  } else {
    //  console.log('Form data added to database.');
    //  }});
    // THIS IS FOR TESTING THE DB, MANUAL ERASE REQUIRED!!!
    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><About/></ReactApp></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});
app.get('/admin', (req, res) => {
    "use strict";

    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><Admin/></ReactApp></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});
app.post("/admin",(req,res)=>{
    console.log(req)
    if(req.body.user in admins){
        bcrypt.compare(req.body.password,admins[req.body.user].hash,(err,result)=>{
            if(result)
            {
                res.setHeader("Set-Cookie", ["name="+req.body.user, "hash="+admins[req.body.user].hash]);
                res.end('bye\n');
                //TODO:Go to real admin site
            }
            //TODO:Wrong password warning back to front
            })
    }
    //TODO: Wrong user warning back to front
})
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

http.createServer(app).listen(process.env.PORT || 3000, function () {
    console.log("Development server is listening on port: 3000");
});
