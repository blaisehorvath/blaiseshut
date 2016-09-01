/**
 * @file A file thet contains the NavButtonBar React component
 */
import React from "react";
import NavButton from "../containers/NavButton";

/**
 * A stateless functional React component that holds the navigation buttons
 * @param props
 * @param props.buttons {Array} A list that contains the settings for each NavButton
 * @returns {XML}
 * @constructor
 */
const NavButtonBar = (props) => {
    const listItems = props.buttons.map((button)=>{
        return (
            <NavButton key={button.id} {...button}/>
        )
    });
    return (
        <ul className="nav navbar-nav">{listItems}</ul>
    );
};

export default NavButtonBar;
