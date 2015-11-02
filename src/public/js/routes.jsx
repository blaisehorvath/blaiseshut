"use strict";
/*eslint-env jsx*/

/*eslint-disable no-unused-vars, undefined*/
const React = require("react");
const Route = require("react-router").Route;
const Default = require("../views/default");
const Cv = require("../views/cv");

let routes = (
      <Route>
            <Route name="cv" path="/cv" handler={Cv} />
            <Route name="root" path="/" handler={Default} />
      </Route>
);

module.exports = routes;
