import React from "react";
import {connect} from "react-redux";
import {changeActiveMenuButton} from "../reducers/StoreAndReducers";

//TODO: change everyting that is related to the isMainPage reducer to activePage

/**
 * A stateless functional React component that is responsible for displaying a single Navigation Button
 * @param props
 * @returns {XML}
 * @constructor
 */
const NavButtonComponent = (props) => {
    return (
        <li className={props.active} >
            <a href={props.href[props.activePage]} onClick={(event) => props.navButtonClick(event)}>{props.caption}</a>
        </li>
    );
};

/**
 * A function that is called on every store update. If the either isMainPage or the activeMenuButton state changes in the application state, the button re-renders.
 * @param state {Object} The state of the application.
 * @param props {Object} The own props of the component.
 * @returns {{isMainPage: (*|isMainPage), active: string}}
 */
const mapStateToProps = (state, props) => {
    return {
        activePage: state.activePage,
        active: props.id === state.activeMenuButton ? "active" : ""
    }
};

//TODO: the mapDispatchToProps function can be removed because it no longer sends data to the store, the navButtonClick function can be moved to props
/**
 * This function connects the returned function to the store so it can dispatch actions.
 * @param dispatch
 * @param props
 * @returns {{navButtonClick: (function(*))}}
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        /**
         * Every Navigation button calls it's own navButtonClick function. The function starts a jQuery animation
         * to the DOM element corresponding to the buttons target id. When the animation is finished the active the function
         * sets the button as the active navigation button.
         * @param event
         */
        navButtonClick: (event) => {
            let $anchor = $(`[href='#${props.id}']`);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }
    }
};

/**
 * A React container component that displays a single Navigation Button
 * @const
 */
const NavButton = connect(mapStateToProps, mapDispatchToProps)(NavButtonComponent);
export default NavButton;