const React = require('react');

let DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
             <title>{this.props.title}</title>
             <meta charSet="utf-8"></meta>
             <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
             <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
             <link href="css/bootstrap.min.css" rel="stylesheet"></link>
             <link href="css/own.css" rel="stylesheet"></link>
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
                     <li><a href="#">Page 1</a></li>
                     <li><a href="#">Page 2</a></li>
                     <li><a href="#">Page 3</a></li>
                   </ul>
                 </div>
               </div>
             </nav>

             <div className="container">
               <div className="jumbotron">
                 <h1>Welcome</h1>
                 <p>This is a blog about what's possible in ES6</p>
                 <a href="#" className="btn btn-info btn-lg"><span className="glyphicon glyphicon-search"></span> Search</a>
               </div>

                  {this.props.children}

             </div>

             <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
             <script src="js/bootstrap.min.js"></script>
        </body>
      </html>
    )
  }
});

module.exports = DefaultLayout;
