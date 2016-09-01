import Nav from "./Nav";
import Footer from "./Footer";

import React from 'react'

/**
 * This is function is the <b>entry</b> point of the application. Each displayed page will be a child of the stateless functional component.
 * @returns {XML}
 */
const ReactApp = (props) => {
    return (
        <div id="reactApp">
            <Nav/>
                {props.children}
            <Footer/>
        </div>
    );
};
export default ReactApp