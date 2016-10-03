import React from "react";
import {connect} from "react-redux"
import {changeActiveMenuButton} from "../reducers/StoreAndReducers";
import {changeActivePage} from "../actions/actions"

import Header from "../components/Header";
import Projects from "../components/Projects";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";

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
                <Header/>

                <Projects/>

                <Team/>

                <ContactUs/>
            </div>
        )
    };
}
;

export default connect()(About)