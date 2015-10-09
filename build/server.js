/*eslint-disable no-unused-vars, no-undef, no-console*/
"use strict";
/*Modules*/

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

require("node-jsx").install({
      harmony: true,
      extension: ".jsx"
});

var routes = require("./public/js/routes");

/*App*/
var app = (0, _express2["default"])();

/*Constants*/
var appDirName = _path2["default"].dirname(require.main.filename);

/*Setting the static directory*/
app.use(_express2["default"]["static"](appDirName + "/public"));

app.use(function (req, res) {
      _reactRouter2["default"].run(routes, req.path, function (Handler) {
            var stuff = undefined;
            switch (req.path) {
                  case "/":
                        stuff = _react2["default"].createElement(Handler, { content: "adsasdasd", nestedContent: "/" });
                        res.send(_react2["default"].renderToString(stuff));
                        break;
                  case "/test":
                        stuff = _react2["default"].createElement(Handler, { content: "adsasdasd", nestedContent: "/test" });
                        res.send(_react2["default"].renderToString(stuff));
                        break;
                  default:

            }
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