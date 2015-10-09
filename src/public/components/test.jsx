/** @jsx React.DOM */
"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let Nested = require("./nested");

let Test = React.createClass({
      render : function () {
        return (
             <div>
                   <h2>{this.props.content}</h2>
                  <Nested nestedContent={this.props.nestedContent}/>
             </div>
      );
      }
});

module.exports = Test;
