import React from "react";

import {connect} from "react-redux"
import {changeActivePage} from "../reducers/StoreAndReducers";

import Projects from "../components/Projects";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(changeActivePage(true));
    }

    componentWillUnmount() {
        this.props.dispatch(changeActivePage(false));
    }


    render() {return (
        <div>
            <header id="aboutUs">
                <div className="container">
                    <h1>Welcome to S.W.A.</h1>
                    <p>
                        This is a template for a simple marketing or informational website. It includes a large callout
                        called the hero unit and three supporting pieces of content. Use it as a starting point to
                        create something more unique. Heat thin meatloafs in a sauté pan with milk for about an hour to
                        cut their mossiness.Grey tofu can be made aged by tossing with adobo sauce.Tuna tastes best with
                        ice water and lots of woodruff.Instead of seasoning warm gold tequila with raspberries, use
                        seven tablespoons ricotta and twelve teaspoons woodruff wok.What’s the secret to hardened and
                        cold turkey? Always use al dente vegemite.
                    </p>
                    <p><a className="btn btn-primary btn-lg more">Learn more »</a></p>
                </div>
            </header>

            <Projects/>

            <section id="team">
                <div className="container">
                    <h1>Team</h1>
                </div>
            </section>
            <section id="contactUs">
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </section>
        </div>
    )};
};

export default connect()(About)