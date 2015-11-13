/*eslint-disable no-unused-vars, no-undef, no-console*/
"use strict";
/*Modules*/
import express from "express";
import path from "path";
import React from "react";

/*App*/
const app = express();

/*Constants*/
const appDirName = path.dirname(require.main.filename);

/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
      console.log({"requestType" : "GET",
                   "path" : req.path});
      res.sendFile(__dirname+ "/index.html")
});

app.listen(4444, function () {
    console.log("Development server is listening on port: 4444");
});