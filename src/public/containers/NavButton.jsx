import React from "react";
import {connect} from "react-redux";
import {changeActiveMenuButton} from "../reducers/StoreAndReducers";

/**
 * A stateless functional React component that is responsible for displaying a single Navigation Button
 * @param props
 * @returns {XML}
 * @constructor
 */
const NavButtonComponent = (props) => {
    return (
        <li className={props.active} >
            <a href={props.isMainPage ? props.href[0] : props.href[1]} onClick={(event) => props.navButtonClick(event)}>{props.caption}</a>
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
        isMainPage: state.isMainPage,
        active: props.id === state.activeMenuButton ? "active" : ""
    }
};

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
            }, 1250, 'easeInOutExpo', ()=>{dispatch(changeActiveMenuButton(props.id));});
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