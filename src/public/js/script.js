/**
 * This sript will is the entry point for the app in the browser
 */

import ReactApp from "../components/reactApp";
import React from "react";
import ReactDOM from "react-dom";

let App = React.createElement(ReactApp,{
    title: "Stuff"
});

console.log("Entry script is running!");

ReactDOM.render(App, document.getElementById('app'));

