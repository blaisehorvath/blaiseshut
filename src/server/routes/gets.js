/**
 * Created by v on 8/19/16.
 */
import React from "react";
/*App*/

//TODO:Make this work on front end. The createStore in script.js should include our middleWares
import {loadBlogPost} from "../../public/reducers/StoreAndReducers"
import {checkHash} from '../security'
import {store, initialState} from '../server'

import express from 'express'
import ReactDOM from "react-dom/server"
import {Provider} from 'react-redux'
import renderHTML from "../renderHTML"

import ReactApp from "../../public/components/ReactApp";
import About from "../../public/pages/About"
import Admin from "../../public/pages/Admin"
import AdminLoggedIn from "../../public/pages/AdminLoggedIn"
import Blog from "../../public/pages/Blog"
import BlogPost from "../../public/pages/BlogPost"
import AppReducer from "../../public/reducers/StoreAndReducers"

import {Tags, getTags} from '../db'
import {createStore} from 'redux';
let pathsAndStores = {
    '/': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true});
            this.content = ReactDOM.renderToString(
                <Provider store={this.store}><ReactApp><About/></ReactApp></Provider>);
            this.contentLogged = ReactDOM.renderToString(
                <Provider store={this.storeLogged}><ReactApp><Blog/></ReactApp></Provider>);
            this.response = renderHTML(this.content, this.store.getState());
            this.responseLogged = renderHTML(this.contentLogged, this.storeLogged.getState());
            this.getResponse = function (loggedIn) {
                return loggedIn ? this.responseLogged : this.response;
            };
            return this;
        },
    },
    '/admin:': {},
    '/admin/:blogTitle': {},
    '/about': {},
    '/contact': {},
    '/blog': {
        init: function () {
            this.store = createStore(AppReducer, {Tags,});
            this.storeLogged = createStore(AppReducer, {Tags});
            this.content = ReactDOM.renderToString(
                <Provider store={this.store}><ReactApp><Blog/></ReactApp></Provider>);
            this.contentLogged = ReactDOM.renderToString(
                <Provider store={this.storeLogged}><ReactApp><Blog/></ReactApp></Provider>);
            this.response = renderHTML(this.content, this.store.getState());
            this.responseLogged = renderHTML(this.contentLogged, this.storeLogged.getState());
            this.getResponse = function (loggedIn) {
                return loggedIn ? this.responseLogged : this.response;
            };
            return this;
        },
    },
    '/blog/:blogTitle': {},
    '/projects': {}
};
getTags().then((tags)=> {
    Object.keys(pathsAndStores).forEach((key, index)=> {
        if (pathsAndStores[key].hasOwnProperty('init')) {
            pathsAndStores[key].init();
        }
    });
});


let router = express.Router();
router.get('/', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    res.send(pathsAndStores['/'].response);
});
router.get('/admin', (req, res) => {//TODO:HTTPS
    "use strict";

    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let content = "";
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        if (result)
            content = ReactDOM.renderToString(<Provider
                store={store}><ReactApp><AdminLoggedIn></AdminLoggedIn></ReactApp></Provider>);
        else
            content = ReactDOM.renderToString(<Provider store={store}><ReactApp><Admin/></ReactApp></Provider>);
        return;
    }).then(()=> {
        let response = renderHTML(content, initialState);
        res.send(response);
    })
});
router.get('/admin/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        if (result) {
            //store.dispatch(loadBlogPost(getBlogPostByTitle(decodeURIComponent(req.params.blogTitle)))); //TODO:better way
            let content = ReactDOM.renderToString(<Provider
                store={store}><ReactApp><AdminLoggedIn></AdminLoggedIn></ReactApp></Provider>);
            let response = renderHTML(content, initialState);
            res.send(response);
        }
    })
});
router.get('/about', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp/></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});

router.get('/contact', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content: appContent});
});
router.get('/blog/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    store.dispatch(loadBlogPost(getBlogPostByTitle(decodeURIComponent(req.params.blogTitle))));
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><BlogPost/></ReactApp></Provider>);
    let response = renderHTML(content, store.getState());
    res.send(response);
});

router.get('/blog', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        res.send(pathsAndStores['/blog'].getResponse(result));
    })

});

router.get('/projects', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content: appContent});
});
/* This is the handler for hiding admin side scripts from client*/
router.get('/private/script.js', (req, res) => {

    console.log({
        reuqestType: "GET",
        path: req.path,
        cookies: req.cookies
    });

    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {// TODO: This may not be needed bc scriptAdmin?
        if (!result) {
            res.sendfile("build/private/js/script.js");
        } //ha nincs login akkor az alap js-t kuldjuk TODO: NE A PUBLICBAN LEGYEN
        else {
            res.sendfile("build/private/js/scriptAdmin.js");
        }//TODO: NE A PUBLICBAN LEGYEN
        return;
    });
});
export default router
