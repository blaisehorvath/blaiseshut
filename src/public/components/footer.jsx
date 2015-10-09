"use strict";
/*eslint-env jsx, node*/
let React = require("react");

let Footer = React.createClass({
      render: () => {
            return (
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
            );
      }
});

module.exports = Footer;
