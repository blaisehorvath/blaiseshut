/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
import http from 'http';
import express from "express";
import React from "react";
import crypto from 'crypto';
import fs from 'fs';

import bodyParser from 'body-parser'
import AppReducer from "../public/reducers/StoreAndReducers"
import cookieParser from "cookie-parser"

import getRoutes from './routes/gets'
import postRoutes from './routes/posts'

import {createStore} from 'redux';
let store = createStore(AppReducer);

/*Https setup*/
let privateKey = fs.readFileSync('build/server/server.key');
let certificate = fs.readFileSync('build/server/server.pem');
let credentials = crypto.createCredentials({key: privateKey, cert: certificate, passphrase: 'w0balubadubdub'});

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));

/*Setting up routing*/
app.use('/', getRoutes);
app.use('/', postRoutes);

let initialState;

//*******************************END OF POST REQUESTS
/*https.createServer(credentials,app).listen(process.env.PORT || 3000, function () {
 console.log("Development server is listening on port: 3000");
 });*/
http.createServer(app).listen(process.env.PORT || 3000, function () {
    console.log("Development server is listening on port: 3000");
});
export {app, store, initialState}