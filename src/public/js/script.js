/**
 * This sript will is the entry point for the app in the browser
 */

import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers,createStore } from 'redux';
import AppReducer from "../reducers/StoreAndReducers";
import Page from  "page";

import ReactApp from "../components/ReactApp";
import Admin from "../components/Admin";
import About from "../components/About"
import Blog from "../components/Blog"
import SinglePost from "../components/SinglePost"

let store = createStore(AppReducer,window.__INITIAL_STATE__);

Page('/admin', ()=>{render(
    <Provider store={store}><ReactApp><Admin/></ReactApp></Provider>,
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
    <Provider store={store}><ReactApp><Blog/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page('/blog/:blogTitle', (blogTitle)=>{render(//TODO: Get path on front end when routing on front-end???
    <Provider store={store}><ReactApp><SinglePost blogTitle={blogTitle}/></ReactApp></Provider>,
    document.getElementById('app')
);});
Page();