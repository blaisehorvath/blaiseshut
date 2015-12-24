import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Main from "./Main";

/*
* This is only for testing purposes
* */
var options = {
    articles : [
        {
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        }
    ]
};

export default class ReactApp extends React.Component {
    constructor(props) {
        super(props);
    }

    /***
     * This is function is the entry point of the react app. Each page will be a state of this React app.
     * @returns {XML}
     */
    render () {
        return (
            <div id="app">
                <Nav/>
                    <div className="container">
                        <Main data={options} />
                    </div>
                <Footer/>
            </div>
        )
    }
};