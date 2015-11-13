import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default class ReactApp extends React.component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div id="app">
                <Nav/>
                <h1>Content Here</h1>
                <Footer/>
            </div>
        )
    }
};