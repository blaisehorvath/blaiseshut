import React from "react";

export default class Nav extends React.component {
    constructor(props) {
        super(props);
    }
    render () {
            return (
                  <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" id="brandText" href="#">Blaise's Hut</a>
                      </div>


                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                          <li id="home" className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                          <li id="aboutMe"><a href="/cv">About me</a></li>
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" id="myDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li role="separator" className="divider"></li>
                              <li><a href="#">Separated link</a></li>
                              <li role="separator" className="divider"></li>
                              <li><a href="#">One more separated link</a></li>
                            </ul>
                          </li>
                        </ul>
                        <form className="navbar-form navbar-right" role="search">
                              <div className="col-lg-6">
                              <div className="input-group">
                               <input type="text" className="form-control" placeholder="Search for..."/>
                               <span className="input-group-btn">
                                 <button className="btn btn-default" type="button">
                                       <span className="glyphicon glyphicon-search"></span>&nbsp;
                                 </button>
                               </span>
                             </div>
                           </div>
                        </form>
                      </div>
                    </div>
                  </nav>

            );
      }
};
