import React from "react";
import {connect} from "react-redux";
import {setActiveNavButton} from "../reducers/StoreAndReducers";

const navButtons = [
    {id: "aboutUs", caption: "About us"},
    {id: "projects", caption: "Projects"},
    {id: "team", caption: "Team"},
    {id: "contactUs", caption: "Contact us"},
    {id: "blog", caption: "Blog"}
];

const NavButtons = (props) => {
    const listItems = navButtons.map((navButton)=> {
        return (
            <li key={navButton.id} className={navButton.id == props.activeId ? "active" : ""}>
                <a href={'#' + navButton.id} className="page-scroll" onClick={(event)=> {
                    props.onNavButtonClick(event, navButton.id)
                }}>
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
        onNavButtonClick: (event, id) => {
            dispatch(setActiveNavButton(id));
            let $anchor = $(`[href='#${id}']`);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }
    }
};

const NavButtonContainer = connect(mapStateToPropsActiveNavButtonId, mapDispatchToPropsActiveNavButtonId)(NavButtons);
export default NavButtonContainer