import React from "react";
import {connect} from "react-redux"
import {changeActiveMenuButton} from "../reducers/StoreAndReducers";
import {changeActivePage} from "../actions/actions"

import Projects from "../components/Projects";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";

import {introText,introShort} from "./Texts"
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(changeActivePage("about"));
        this.props.dispatch(changeActiveMenuButton("aboutUs"));
    }

    componentWillUnmount() {
        this.props.dispatch(changeActivePage(false));
    }


    render() {
        return (
            <div>
                <header id="aboutUs">
                    <div className="container">
                        <h1 className="headerTitle">{introShort}</h1>
                        <p>{introText}</p>
                        <p><a className="btn btn-primary btn-lg more">Learn more »</a></p>
                    </div>
                </header>

                <Projects/>

                <Team/>

                <ContactUs/>

            </div>
        )
    };
}
;

export default connect()(About)