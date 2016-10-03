import React from 'react';
import {introText, introShort} from "../pages/Texts";

/**
 * This stateless functional react component is responsible for rendering the header.
 * @param props
 * @returns {XML}
 * @constructor
 */
const Header = (props) => {
    return (
        <header id="aboutUs">
            <div className="container">
                <div className="headerContent">
                    <h1 className="headerTitle">{introShort}</h1>
                    <div>{introText}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
