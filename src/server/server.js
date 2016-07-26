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
import AdminLoggedIn from "../public/components/AdminLoggedIn"
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
const AWSENABLE=true;
//************************************************SETTING UP SECURITY, COOKIES******************************************
let admins = {
    Viktor:{
        hash:""
    },
    Blaise:{
        hash:""
    }
};

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
const saltRounds=10;
/*TODO: Make sure theres no ";" in the hash, to make it work in any browser....*/
bcrypt.genSalt(saltRounds,(err,salt)=>
    {
        bcrypt.hash("qwertz",salt,(err,hash)=> {admins.Viktor.hash=hash})
    }
);
bcrypt.genSalt(saltRounds,(err,salt)=>
    {
        bcrypt.hash("Seabythelive",salt,(err,hash)=>{admins.Blaise.hash=hash})
    }
);
const checkHash=(name,hash)=>{
    return new Promise((resolve,reject)=>{
        if(name in admins)
        {
            if ("hash" in admins[name])
            {
                resolve(hash === admins[name].hash);
            }
            else resolve(false);
        }
        else resolve(false);
    })
}
const checkPassword=(name,password)=>{
    return new Promise((resolve,reject)=> {
        if (name in admins) {
            bcrypt.compare(password, admins[name].hash, (err, result)=> {
                if (err) reject(err);
                else resolve(result);
            })
        }
        else resolve(false)
    });
    //else return false;
};
//************************************************END OF SETTING UP SECURITY, COOKIES***********************************


//****************************************************************DB SETUP**********************************************
///*Setting up amazon AWS connection.
// Should have a credentials file in ~/.aws with the following content:
/*[default]

aws_access_key_id = "Your access key id"

aws_secret_access_key = "Your secret access key"
These keys can be obtained from the IAM console/Users/Your User/Security Credentials/Create Acess key
The DB is obtained by the parameters in app_config.json/*/
//var config = fs.readFileSync('./server/app_config.json', 'utf8');
//TODO: EXPORT to standalone file gulp etc.
var config = {
    "AWS_REGION": "eu-central-1",
    "STARTUP_SIGNUP_TABLE": "SWABlog"
};
var db = new AWS.DynamoDB({region: config.AWS_REGION});
var idnum = 0;
const blogPostToDb =(text,date,user)=> {
    if(AWSENABLE){
        let form = {
            TableName: config.STARTUP_SIGNUP_TABLE,
            Item: {
                id: {'S': (idnum++).toString()},
                text: {'S': text},
                date: {'S': date},
                user: {'S': user}
            }
        }
        db.putItem(form,function(err,data){
            if (err) {
                console.log('Error adding item to database: ', err);
            } else {
                console.log('Form data added to database.');
            }
        })
    }
}
//*******************************************************END OF DB SETUP************************************************
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
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp ><About/></ReactApp></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});
app.get('/admin', (req, res) => {//TODO:HTTPS
    "use strict";

    console.log({
        reuqestType : "GET",
        path : req.path
    });
    let content = "";
    checkHash(req.cookies.name,req.cookies.hash).then((result)=>{
        if(result) content = ReactDOM.renderToString(<Provider store={store}><ReactApp><AdminLoggedIn/></ReactApp></Provider>);
        else  content = ReactDOM.renderToString(<Provider store={store}><ReactApp><Admin/></ReactApp></Provider>);
        return;
    }).then(()=>{
        let response = renderHTML(content, initialState);
        res.send(response);
    })
});

app.post("/admin",(req,res)=>{
    checkPassword(req.body.user, req.body.password).then((result)=>{
        if(result){
            res.cookie('name',req.body.user,{});
            res.cookie('hash',admins[req.body.user].hash,{});
            res.redirect('/admin');
        }
        else {
            res.redirect('/admin');//TODO: Wrong user warning back to front with AJAX
        }
    });
});
app.post("/logout",(req,res)=>{
    res.cookie('name','',{Expires: new Date().toISOString(),path:'/'});
    res.cookie('hash','',{Expires: new Date().toISOString(),path:'/'});
    res.redirect('/admin');
})
app.post("/newblogpost",(req,res)=>{
    if(req.body.text != ""){
        blogPostToDb(req.body.text,(new Date).toISOString(),req.cookies.name);
    }
    res.redirect('/admin')
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
