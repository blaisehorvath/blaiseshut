/**
 * This sript will is the entry point for the app in the browser
 */

import React from "react";
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux';
import createLogger from 'redux-logger';
import AppReducer from "../reducers/StoreAndReducers";
import Page from  "page";

import ReactApp from "../components/ReactApp";
import Admin from "../pages/Admin";
import About from "../pages/About"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost"

const logger = createLogger();
const store = createStore(AppReducer, window.__INITIAL_STATE__, compose(/*applyMiddleware(logger),*/     window.devToolsExtension ? window.devToolsExtension() : f => f )); //applyMiddleware(logger));
window.dispatch = store.dispatch;
window.getState = store.getState;
window.subscribe = store.subscribe;


Page('/admin', ()=> {
    render(
        <Provider store={store}><ReactApp><Admin/></ReactApp></Provider>,
        document.getElementById('app')
    );
});
Page('/about', ()=> {
    render(
        <Provider store={store}><ReactApp><About/></ReactApp></Provider>,
        document.getElementById('app')
    );
});
Page('/', ()=> {
    render(
        <Provider store={store}><ReactApp><About/></ReactApp></Provider>,
        document.getElementById('app')
    );
});
Page('/blog', ()=> {
    render(
        <Provider store={store}><ReactApp><Blog/></ReactApp></Provider>,
        document.getElementById('app')
    );
});
Page('/blog/:blogTitle', ()=> {
    render(
        <Provider store={store}><ReactApp><BlogPost/></ReactApp></Provider>,
        document.getElementById('app')
    );
});
Page();