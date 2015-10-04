"use strict";
/*eslint-env jsx node*/
import React from "react";

let DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
             <title>{this.props.title}</title>
             <meta charSet="utf-8"></meta>
             <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
             <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
             <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"></link>
             <link href="css/own.css" rel="stylesheet"></link>
             <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" type="text/css"></link>
        </head>
        <body>
             <nav className="navbar navbar-inverse navbar-fixed-top">
               <div className="container-fluid">
                 <div className="navbar-header">
                   <a className="navbar-brand" href="#">{this.props.title}</a>
                 </div>
                 <div>
                   <ul className="nav navbar-nav">
                     <li className="active"><a href="#">Home</a></li>
                     <li><a href="#">About Me</a></li>
                   </ul>
                 </div>
               </div>
             </nav>

             <div className="container">
               <div className="jumbotron">
                 <h1>Welcome to my blog</h1>
                 <p>This is a blog whre I share my solutions and ideas with the world.</p>
               </div>

                  {this.props.children}

             </div>

             <footer>
               <div className="container">
                 <div className="col-sm-4">
                   <h4>About me</h4>
                   <p>
                     My name is Blaise Horvath, I'm a Programmer, Bioinformatician, Molecular Biologist and a tech geek.
                   </p>
                 </div> {/* col-sm-4*/}

                 <div className="col-sm-4">
                   <h4>See more</h4>
                   <ul>
                     <li><a>Github</a></li>
                     <li><a>LinkedIn</a></li>
                   </ul>
                 </div> {/* col-sm-4*/}

                 <div className="col-sm-4">
                   <h4>Copyright &copy; Balázs Horváth</h4>
                 </div> {/* col-sm-4*/}

               </div> {/* container*/}
             </footer>

             <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
