/*eslint-disable no-unused-vars, no-undef, no-console*/
"use strict";
/*Modules*/
var express = require("express");
var path = require("path");

require("node-jsx").install({
      harmony: true,
      extension: ".jsx"
});

var React = require("react");
var Router = require("react-router");
var ArticleIntro = require("./public/components/articleIntro.jsx");
var routes = require("./public/js/routes");

/*App*/
var app = express();

/*Constants*/
var appDirName = path.dirname(require.main.filename);

/*Configuring React*/
app.set("views", appDirName + "/views/");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//setting the static directory
app.use(express["static"](appDirName + "/public"));

app.use(function (req, res) {
      Router.run(routes, req.path, function (Handler) {
            // let stuff;
            // switch (req.path) {
            //       case "/":
            //             stuff = React.createElement(Handler, {content : "adsasdasd", nestedContent:"/"});
            //             res.send(React.renderToString(stuff));
            //             break;
            //       case "/test":
            //             stuff = React.createElement(Handler, {content : "adsasdasd", nestedContent:"/test"});
            //             res.send(React.renderToString(stuff));
            //             break;
            //       default:
            //
            // }
            res.render("home", { name: "John", title: "Javascript Algorithms" });
            console.log({
                  router: "react",
                  path: req.path
            });
      });
});

// app.get("/", function (req, res) {
//        res.render("home", { name: "John", title: "Javascript Algorithms" });
// });

app.listen(4444, function () {
      console.log("Server started! \r\nListening on port: 4444");
});