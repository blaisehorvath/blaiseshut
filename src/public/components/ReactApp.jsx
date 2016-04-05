import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About"
/*
* This is only for testing purposes
* */
var options = {
    aboutProjects : [
        {
            id : 0,
            title:"CNC",
            picture:"http://www.finmech.hu/wp-content/uploads/2015/08/Close-up-of-CNC-machine-at-work.jpg",
            short_descr:"Nagyon durva bááázee"
        },
        {
            id : 1,
            title:"MIDI synth",
            picture:"http://www.elektricks.net/wp-content/uploads/2015/02/STM32F4-Discovery.jpg",
            short_descr:"Nagyon durva bááázee"
        },
        {
            id : 2,
            title:"Mesh network with RIOT os",
            picture:"http://midisizer.files.wordpress.com/2013/01/midibud_bbf-small1.jpg",
            short_descr:"Nagyon durva bááázee"
        }
    ],
    articles : [
        {
            id : 0,
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. <p> VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. </p>",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id : 1,
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id : 2,
            title : "This is the first article",
            body : "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id : 3,
            title : "Yellow umbrella",
            body : '<img class="img-responsive" src="https://41.media.tumblr.com/875799f7d42336377a1931e04df15f21/tumblr_npr9pzmNhq1qmv09yo1_500.png" />',
            tags : ["image"]
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
            <div id="reactApp">
                <Nav/>
                    <div className="container">
                        <About data={options}/>
                    </div>
                <Footer/>
            </div>
        )
    }
};