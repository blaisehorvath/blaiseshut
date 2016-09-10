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

import {pathsAndStores} from '../db'
import {createStore} from 'redux';


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
    checkHash(req.cookies.name, req.cookies.hash).then(result=>
        res.send(pathsAndStores['/admin'].getResponse(result))
    )
});
router.get('/admin/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });

    checkHash(req.cookies.name, req.cookies.hash).then(result=>
        res.send(pathsAndStores['/admin/:blogTitle'].getResponse(result))
    )
});

router.get('/blog/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });

    checkHash(req.cookies.name, req.cookies.hash).then(result=>
        res.send(pathsAndStores['/blog/:blogTitle']
            .getResponseWithBlogPost(result, encodeURIComponent(req.params.blogTitle))));
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
