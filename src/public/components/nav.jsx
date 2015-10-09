"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let Nav = React.createClass({
      render: () => {
            return (
                  <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#">Blaise's hut</a>
                      </div>
                      <div>
                        <ul className="nav navbar-nav">
                          <li className="active"><a href="#">Home</a></li>
                          <li><a href="#">About Me</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>

            );
      }
});

module.exports = Nav;
