import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About"

import React from 'react'

import {syncHistoryWithStore} from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'


/*
 * This is only for testing purposes
 * */

const ReactApp = () =>
/***
 * This is function is the entry point of the react app. Each page will be a state of this React app.
 * @returns {XML}
 */
    (
        <div id="reactApp">
            <Nav/>
            <div className="container" data-spy="scroll">
            <About/>
            </div>
            <Footer/>
        </div>
    )

export default ReactApp