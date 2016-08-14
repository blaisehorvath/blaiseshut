import React from "react";
import NavButtonContainer from "../containers/NavButtonsContainer";


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-custom affix">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <div className="menuSign">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </div>
                        </button>
                        <a className="navbar-brand" id="brandText" href="#">S.W.A.</a>
                    </div>



                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <NavButtonContainer/>

                        <div className="pull-right">
                            <form className="navbar-form" role="search">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Search" type="text"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <span className="glyphicon glyphicon-search"/>
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </nav>
        );
    }
};

