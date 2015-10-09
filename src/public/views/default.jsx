"use strict";
/*eslint-env jsx, node*/
/*eslint no-unused-vars: 0*/
const React = require("react");
const Header = require("../components/header");
const Footer = require("../components//footer");
const Nav = require("../components//nav");

let DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>

      <Header/>
        <body>
             <Nav/>

             <div className="container">
               <div className="jumbotron">
                 <h1>Welcome to my blog</h1>
                 <p>This is a blog whre I share my solutions and ideas with the world.</p>
               </div>

               {this.props.children}


             </div>


             <Footer/>
             <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
