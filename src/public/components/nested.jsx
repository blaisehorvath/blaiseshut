/** @jsx React.DOM */
"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let Nested = React.createClass({
      render : function () {
        return (
             <div>
                   <h2>{this.props.nestedContent}</h2>
             </div>
      );
      }
});

module.exports = Nested;
