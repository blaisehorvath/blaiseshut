import React from "react";
import NavButton from "../containers/NavButton";

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
