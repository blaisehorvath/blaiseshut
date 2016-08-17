import React from "react";
import NabButtonBar from "./NavButtonBar";

const navButtons = [
    {id: "aboutUs", caption: "About us", href: ["#aboutUs", "/#aboutUs"]},
    {id: "projects", caption: "Projects", href: ["#projects", "/#projects"]},
    {id: "team", caption: "Team", href: ["#team", "/#team"]},
    {id: "contactUs", caption: "Contact us", href: ["#contactUs", "/#contactUs"]},
    {id: "blog", caption: "Blog", href: ["/blog", "#blog"]}
];

const Nav = (props) => {
    return (
        <nav className="scrollNav navbar navbar-default navbar-fixed-top navbar-custom affix">
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
                    <a className="navbar-brand" id="brandText" href="/">S.W.A.</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <NabButtonBar buttons={navButtons}/>

                    {/*<ul className="nav navbar-nav">*/}
                    {/*<li><a href="#aboutUs">About us</a></li>*/}
                    {/*<li><a href="#projects">Projects</a></li>*/}
                    {/*<li><a href="#team">Team</a></li>*/}
                    {/*<li><a href="#contactUs">Contact us</a></li>*/}
                    {/*<li><a href="/blog">Blog</a></li>*/}
                    {/*</ul>*/}


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
