import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default class ReactApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div id="app">
                <Nav/>
                <h1>{this.props.title}</h1>
                <p>Lorem ipsusm</p>
                <Footer/>
            </div>
        )
    }
};