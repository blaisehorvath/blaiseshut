"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let Header = React.createClass({
      render: () => {
            return (
            <head>
                 <title>Blaise's hut</title>
                 <meta charSet="utf-8"></meta>
                 <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                 <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                 <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"></link>
                 <link href="css/own.css" rel="stylesheet"></link>
                 <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" type="text/css"></link>
                 <link href='https://fonts.googleapis.com/css?family=Slabo+27px' rel='stylesheet' type='text/css'/>
                 <link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500' rel='stylesheet' type='text/css'/>
            </head>
      );
      }
});

module.exports = Header;
