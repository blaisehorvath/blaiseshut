import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
            return (
                  <footer className="footer">
                    <div className="container">
                      <div className="col-sm-4">
                        <h4>About me</h4>
                        <p>
                          For a muddy heated curry, add some lemon juice and oregano. Yellow, sweet pudding is best garnished with clammy kefir.
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
    };
}