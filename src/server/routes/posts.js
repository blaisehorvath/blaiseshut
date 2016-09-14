/**
 * Created by v on 8/19/16.
 */
import {admins,checkHash,checkPassword} from '../security'
import {blogPostToDb, queryBlogPosts} from '../db'
import React from "react";
import express from 'express'
let router = express.Router();


router.post("/getTags", (req, res)=> {
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        if (result) {
            res.send({tags: ["tagone", "tagtwo..."]});
        }
        else {
            res.send({errormsg: "wrong pw user"});
        }
    });
});
router.post("/loggedIn", (req,res)=>{
  checkHash((req.cookies.name,req.cookies.hash)).then(result=>res.send(result))
});
router.post("/adminlogged", (req, res)=> {
    checkPassword(req.body.user, req.body.password).then((result)=> {
        if (result) {
            res.send({name: req.body.user, hash: admins[req.body.user].hash});
        }
        else {
            res.send({errormsg: "wrong pw user"});
        }
    });
});

router.post("/logout", (req, res)=> {
    res.cookie('name', '', {Expires: new Date().toISOString(), path: '/'});
    res.cookie('hash', '', {Expires: new Date().toISOString(), path: '/'});
    res.redirect('/admin');
});

router.post("/newblogpost", (req, res)=> {
    checkHash((req.cookies.name,req.cookies.hash)).then(result=>{
        if(result){
            if (req.body.text != "") {
                blogPostToDb({
                    id: req.body.id||undefined,
                    text: req.body.text,
                    date: (new Date).toISOString(),
                    user: req.cookies.name,
                    tags: req.body.tags,
                    title: req.body.title
                });
            }
        }
    });

    res.redirect('/admin')
});


router.post("/admin", (req, res)=> {
    checkPassword(req.body.user, req.body.password).then((result)=> {
        if (result) {
            res.cookie('name', req.body.user, {});
            res.cookie('hash', admins[req.body.user].hash, {});
            res.redirect('/admin');
        }
        else {
            res.redirect('/admin');//TODO: Wrong user warning back to front with AJAX
        }
    });
});


router.post("/getBlogPosts", (req, res)=> {//TODO:error handling
    queryBlogPosts(req.body.currentBlogPostIds ? req.body.currentBlogPostIds : [],
        req.body.activeTags ? req.body.activeTags : [], req.body.numberOfPostsToReturn)
        .then((data)=> {
            res.send(data)
        })
});
export default router