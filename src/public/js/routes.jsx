/** @jsx React.DOM */
"use strict";
/*eslint-env jsx*/

/*eslint-disable no-unused-vars, undefined*/
let React = require("react");
let Route = require("react-router").Route;
let ArticleIntro = require("../components/articleIntro");
let Test = require("../components/test");

let routes = (
      <Route name="root" path="/" handler={Test}>
            <Route name="test" path="/test" handler={Test} />
      </Route>
);

module.exports = routes;
