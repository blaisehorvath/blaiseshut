import Nav from "./Nav";
import Footer from "./Footer";

import React from 'react'

/*
 * This is only for testing purposes
 * */

const ReactApp = (props) => {
    /***
     * This is function is the entry point of the react app. Each page will be a state of this React app.
     * @returns {XML}
     */
    return (
        <div id="reactApp">
            <Nav/>
                {props.children}
            <Footer/>
        </div>
    );
};
export default ReactApp