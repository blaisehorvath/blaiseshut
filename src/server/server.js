/*eslint-disable no-unused-vars, no-undef, no-console*/
"use strict";
/*Modules*/
import express from "express";
import path from "path";
import React from "react";
import Router from "react-router";
import routes from "../public/js/routes"

/*App*/
const app = express();

/*Constants*/
const appDirName = path.dirname(require.main.filename);

/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));

app.use((req, res) => {
      Router.run(routes, req.path, (Handler) => {
            let stuff;
            switch (req.path) {
                  case "/":
                        stuff = React.createElement(Handler, {content : "adsasdasd", nestedContent:"/"});
                        res.send(React.renderToString(stuff));
                        break;
                  case "/cv":
                        stuff = React.createElement(Handler, {content : "adsasdasd", nestedContent:"/test"});
                        res.send(React.renderToString(stuff));
                        break;
                  default:

            }
            console.log({
                  router : "react",
                  path : req.path
            });

      });
});


// app.get("/", function (req, res) {
//        res.render("home", { name: "John", title: "Javascript Algorithms" });
// });

app.listen(4444, function () {
    console.log("Server started! \r\nListening on port: 4444");
});
