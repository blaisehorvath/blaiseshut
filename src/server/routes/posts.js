import {admins, verifyEmail, checkHash,checkPassword} from '../security'
import {blogPostToDb, queryBlogPosts} from '../db'
import React from "react";
import express from 'express';
import {SNS} from 'aws-sdk';

const sns = new SNS({ region : "eu-central-1"});
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

/**
 * This route handles the messages from the clients.
 */
router.post("/getMessage", (req, res)=> {
    // checking whether the request contains everything that is needed
    if ("body" in req && "email" in req.body && "message" in req.body) {

        // verifying whether the given address is a valid at all
        if (!verifyEmail(req.body.email)) {
            res.status(400);
            res.send();

        } else {

            // stripping the html tags to prevent XSSR
            let message = req.body.message.replace(/<[^>]*script.*>/gi, "");

            let params = {
                Message: `
                Sender: ${req.body.email}
                
                Message:
                ${message}`,
                Subject: 'Website Customer Message',
                TargetArn: 'arn:aws:sns:eu-central-1:338158282039:webpage-client-message'
            };

            console.log({req: "POST", email : req.body.email, message: message});
            console.log("Sending to AWS SNS");

            sns.publish(params, (err, data)=>{
                // if the message could not be published
                if (err) {
                    console.log(err);
                    res.status(503);
                    res.send();
                    console.log({snsMessageStatus: "Failed"});
                }

                // if everything is fine
                else {
                    res.status(200);
                    res.send();
                    console.log({snsMessageStatus: "Success", data});
                }
            });
        }
    } else {
        // if the the body does not contain the proper keys, or there is no body
        res.status(400);
        res.send();
    }
});

export default router