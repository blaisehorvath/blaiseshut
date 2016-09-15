import React from "react";
import NabButtonBar from "./NavButtonBar";

/**
 * A constant that stores the possible values for different states for the navigation bar
 * @constant
 * @type {Array}
 */
const navButtons = [
    {id: "aboutUs", caption: "About us", href: {about: "#aboutUs", blog: "/#aboutUs", blogPost: "/#aboutUs"}},
    {id: "projects", caption: "Projects", href: {about: "#projects", blog: "/#projects", blogPost: "/#projects" }},
    {id: "team", caption: "Team", href: { about: "#team", blog: "/#team", blogPost: "/#team" }},
    {id: "contactUs", caption: "Contact us", href: { about: "#contactUs", blog: "/#contactUs" , blogPost: "/#contactUs"}},
    {id: "blog", caption: "Blog", href: { about:  "/blog/#blog", blog: "#blog", blogPost: "/blog/#blogPost"  }}
];

/**
 * A stateless functional React component that returns the Navigation bar
 * @returns {XML}
 * @constructor
 */
const Nav = () => {
    return (
        <nav className="scrollNav navbar navbar-default navbar-fixed-top navbar-custom affix">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <div className="menuSign">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </div>
                    </button>
                    <a className="navbar-brand" id="brandText" href="/">S.W.A.</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <NabButtonBar buttons={navButtons}/>

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
};

export default Nav;
