import React from "react";
import {connect} from "react-redux";
import {changeActiveMenuButton} from "../reducers/StoreAndReducers";

const NavButtonComponent = (props) => {
    return (
        <li className={props.active} >
            <a href={props.isMainPage ? props.href[0] : props.href[1]} onClick={props.navButtonClick}>{props.caption}</a>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    return {
        isMainPage: state.isMainPage,
        active: props.id === state.activeMenuButton ? "active" : ""
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        navButtonClick: () => {
            let $anchor = $(`[href='#${props.id}']`);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1250, 'easeInOutExpo', ()=>{dispatch(changeActiveMenuButton(props.id));});
            event.preventDefault();
        }
    }
};

const NavButton = connect(mapStateToProps, mapDispatchToProps)(NavButtonComponent);
export default NavButton;