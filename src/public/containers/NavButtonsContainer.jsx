import React from "react";
import {connect} from "react-redux";
import {setActiveNavButton} from "../reducers/StoreAndReducers";

const navButtons = [
    {id: "home", caption : "About us"},
    {id: "projects", caption : "Projects"},
    {id: "team", caption : "Team"},
    {id: "contactUs", caption : "Contact us"},
    {id: "blog",  caption : "Blog"}
];

const NavButtons = (props) => {
    const listItems = navButtons.map((navButton)=>{
        return (
            <li id={navButton.id} className={navButton.id == props.activeId ? "active" : ""}>
                <a href={'#'+navButton.id.toLowerCase()} onClick={()=>{props.onNavButtonClick(navButton.id)}}>
                    {navButton.caption}
                </a>
            </li>)
    });
    return (
        <ul className="nav navbar-nav">
            {listItems}
        </ul>
    )
};

const mapStateToPropsActiveNavButtonId = (state)=> {
    return {
        activeId: state.ActiveNavButtonId,
    }
};
const mapDispatchToPropsActiveNavButtonId = (dispatch) => {
    return {
        onNavButtonClick: (id) => {
            dispatch(setActiveNavButton(id))
        }
    }
};

const NavButtonContainer = connect(mapStateToPropsActiveNavButtonId, mapDispatchToPropsActiveNavButtonId)(NavButtons);
export default NavButtonContainer