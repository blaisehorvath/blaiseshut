/** @jsx React.DOM */
"use strict";
/*eslint-env jsx*/

/*eslint-disable no-unused-vars, undefined*/
const React = require("react");
const Route = require("react-router").Route;
const Default = require("../views/default");

let routes = (
      <Route name="root" path="/" handler={Default}>
            <Route name="test" path="/test" handler={Default} />
      </Route>
);

module.exports = routes;
