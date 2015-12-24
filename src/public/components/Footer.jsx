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
    };
}