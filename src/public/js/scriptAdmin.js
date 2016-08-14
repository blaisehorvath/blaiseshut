/**
 * This sript will is the entry point for the app in the browser
 */
//TODO: This script has to be updated whenever we change server.js... Possible workaround?
import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers,createStore } from 'redux';
import AppReducer from "../reducers/StoreAndReducers";
import Page from  "page";

import ReactApp from "../components/ReactApp";
import AdminLoggedIn from"../pages/AdminLoggedIn";
import About from "../pages/About"
import Blog from "../pages/Blog"

let store = createStore(AppReducer,window.__INITIAL_STATE__);

Page('/admin', ()=>{render(
    <Provider store={store}><ReactApp><AdminLoggedIn/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page('/about', ()=>{render(
    <Provider store={store}><ReactApp><About/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page('/', ()=>{render(
    <Provider store={store}><ReactApp><About/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page('/blog', ()=>{render(
    <Provider store={store}><ReactApp><Blog loggedIn={true}/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page();