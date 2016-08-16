import React from "react";
import {connect} from "react-redux";


const NavButtonComponent = (props) => {
    return (
        <li key={props.key}>
            <a href={props.href} onClick={props.navButtonClick}>{props.caption}</a>
        </li>
    );
};

const mapStateToProps = (state, props) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        navButtonClick: () => {
            let $anchor = $(`[href='#${props.id}']`);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }
    }
};

const NavButton = connect(mapStateToProps, mapDispatchToProps)(NavButtonComponent);
export default NavButton;