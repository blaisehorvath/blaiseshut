/**
 * This sript will is the entry point for the app in the browser
 */

import React from "react";
import { render } from 'react-dom'
import ReactApp from "../components/ReactApp";
import Admin from "../components/Admin";
import About from "../components/About"
import { Provider } from 'react-redux'
import { combineReducers,createStore } from 'redux';
import AppReducer from "../reducers/StoreAndReducers";
import Page from  "page";

console.log("FRONTEND RUNNING");

let store = createStore(AppReducer,window.__INITIAL_STATE__);

Page('/admin', ()=>{render(
    <Provider store={store}><ReactApp><Admin/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page('/adminlogged', ()=>{render(
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
Page();