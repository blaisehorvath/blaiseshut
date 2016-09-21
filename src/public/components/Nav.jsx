import React from "react";
import NavButtonBar from "./NavButtonBar";

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

                    <NavButtonBar buttons={navButtons}/>

                </div>


            </div>
        </nav>
    );
};

export default Nav;
