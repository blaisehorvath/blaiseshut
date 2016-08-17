/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
import crypto from 'crypto';
import https from 'https'
import fs from 'fs'
import  http from 'http';
import AWS from "aws-sdk";
import express from "express";
import path from "path";
import React from "react";
import ReactDOM from "react-dom/server"
import {Provider} from 'react-redux'
/*App*/
import hipsteripsom from 'hipsteripsum'
import bodyParser from 'body-parser'
import renderHTML from "./renderHTML"
import AppReducer from "../public/reducers/StoreAndReducers"
import cookieParser from "cookie-parser"
import credential from "credential"

//TODO:Make this work on front end. The createStore in script.js should include our middleWares
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux';
const logger = createLogger();
let store = createStore(AppReducer/*,applyMiddleware(logger)*/);

let app = express();

import ReactApp from "../public/components/ReactApp";
import About from "../public/pages/About"
import Admin from "../public/pages/Admin"
import AdminLoggedIn from "../public/pages/AdminLoggedIn"
import Blog from "../public/pages/Blog"
import BlogPost from "../public/pages/BlogPost"

import {setInitialTags, addTag, loadBlogPost} from "../public/reducers/StoreAndReducers"

/*Constants*/
const appDirName = path.dirname(require.main.filename);
//************************************************SETTING UP SECURITY, COOKIES******************************************
let privateKey = fs.readFileSync('build/server/server.key');
let certificate = fs.readFileSync('build/server/server.pem');
let credentials = crypto.createCredentials({key: privateKey, cert: certificate, passphrase: 'w0balubadubdub'});
let pw = credential()
let admins = {
    Viktor: {
        hash: ""
    },
    Blaise: {
        hash: ""
    }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
const saltRounds = 10;
/*TODO: Make sure theres no ";" in the hash, to make it work in any browser....*/
pw.hash("qwertz", (err, hash)=> {
    if (err) throw err
    admins.Viktor.hash = hash
})
pw.hash("Seabythelive", (err, hash)=> {
    if (err) throw err
    admins.Blaise.hash = hash
})
const checkHash = (name, hash)=> {
    return new Promise((resolve, reject)=> { //TODO: make a result variable and resolve that...
        if (name in admins) {
            if ("hash" in admins[name]) {
                resolve(hash === admins[name].hash);
            }
            else resolve(false);
        }
        else resolve(false);
    })
};
const checkPassword = (name, password)=> {
    return new Promise((resolve, reject)=> {
        if (name in admins) {
            pw.verify(admins[name].hash, password, (err, isValid)=> {
                if (err) throw err
                resolve(isValid)
            })
        }
        else resolve(false)
    });
};
//************************************************END OF SETTING UP SECURITY, COOKIES***********************************


//****************************************************************DB SETUP**********************************************
///*Setting up amazon AWS connection.
// Should have a credentials file in ~/.aws with the following content:
/*[default]

 aws_access_key_id = "Your access key id"

 aws_secret_access_key = "Your secret access key"
 These keys can be obtained from the IAM console/Users/Your User/Security Credentials/Create Acess key
 The DB is obtained by the parameters in app_config.json/
 Db function can be disabled with AWSENABLE*/
//var config = fs.readFileSync('./server/app_config.json', 'utf8');
//TODO: EXPORT to standalone file gulp etc.
const AWSENABLE = true;
var config = {
    "AWS_REGION": "eu-central-1",
    "STARTUP_SIGNUP_TABLE": "SWAblog"
};
let db = new AWS.DynamoDB({region: config.AWS_REGION});
let doc = new AWS.DynamoDB.DocumentClient({region: config.AWS_REGION});
let idnum = 0;
let params = {
    TableName: "SWAblog",
    Count: true
};
let queryCache = undefined;
(()=> {
    let queryparams = {
        TableName: "SWAblog",
        ProjectionExpression: "#id, #date, #text, #user, #tags, #precontent, #title",
        ExpressionAttributeNames: {
            "#id": "id",
            "#date": "date",
            "#text": "text",
            "#user": "user",
            "#tags": "tags",
            "#precontent": "precontent",
            "#title": "title"
        }
    };
    doc.scan(queryparams, (err, data)=> {
        if (err) console.log(err);
        else queryCache = data;
    });
})();
//TODO:GET TAGS BEFORE SENDIND THE STORE TO ANYONE!!
const queryBlogPosts = (currentBlogPostIds, activeTags, numberOfPostsToReturn)=> {//
    return new Promise((resolve, reject)=> {
        //Get all the remaining posts
        let availableBlogPosts = queryCache.Items
            .filter((post)=>currentBlogPostIds.indexOf(post.id.toString()) === -1)
            .sort((a, b)=> { // descending order, TODO: maybe we could order things by date?
                return a.id < b.id ? 1 : -1
            });
        console.log(availableBlogPosts.map(post=>post.id))
        //Filter blogposts if active tag is set...
        let tagFilteredBlogPosts =
            activeTags
                ? availableBlogPosts.filter(post=>
                activeTags
                    .map(tag=>tag.name)
                    .reduce((prev, curr)=>
                    post.tags.split(" ").indexOf(curr) > -1 && prev, true))
                : availableBlogPosts;
        resolve(tagFilteredBlogPosts
            .slice(0, numberOfPostsToReturn))
    })
};
const blogPostToDb = ({text, precontent, date, user, tags, title})=> {
    if (AWSENABLE) {
        let form = {
            TableName: config.STARTUP_SIGNUP_TABLE,
            Item: {
                id: {'N': (idnum++).toString()},
                precontent: {'S': precontent},
                text: {'S': text},
                date: {'S': date},
                user: {'S': user},
                title: {'S': title},
                tags: {'S': tags}
            }
        };
        db.putItem(form, function (err, data) {
            if (err) {
                console.log('Error adding item to database: ', err)
            } else {
                console.log('Form data added to database.');
            }
        })
    }
};
const fillBlogPostsDb = ()=> {
    for (let i = 0; i < 10; i++) {
        blogPostToDb({
            id: i,
            text: hipsteripsom.get(2),
            precontent: hipsteripsom.get(4),
            date: new Date().toISOString(),
            user: i % 2 ? 'Viktor' : 'Blaise',
            title: "This is the number" + i + " BlogPost",
            tags: "tag" + i + " tag" + Number(i + 1)
        })
    }
};
// fillBlogPostsDb();
let Tags = []; //Tags are in a format like{name,id,relevance} where relevance is the times it has been in any post
//Tags should be a Set!!!!
const getTags = ()=> {
    new Promise((resolve, reject)=> {
        doc.scan({TableName: "SWAblog"}, (err, data)=> {
            if (err) console.log(err);
            resolve(data)
        })
    }).then((data)=> {//TODO:This could be a good excersize in functional programming
        let currentTagId = 0;
        for (let i = 0; i < data.Items.length; i++) {
            let blogTags = data.Items[i].tags.split(" ");
            for (let j = 0; j < blogTags.length; j++) {
                if (Tags.map(tag=> {
                        return tag.name
                    }).indexOf(blogTags[j]) > -1) {
                    Tags[Tags.map(tag=> {
                        return tag.name
                    }).indexOf(blogTags[j])].relevance++;
                }
                else {
                    Tags.push({name: blogTags[j], relevance: 1, id: currentTagId++})
                }
            }
        }
        return Tags
    })
        .then((tags)=> {
            store.dispatch(setInitialTags(tags));
            initialState = store.getState();// TODO:Maybe this should be a little bit more logical??
            // console.log(initialState)
        })
};
getTags();

//*******************************************************END OF DB SETUP************************************************
/*Setting the static directory*/
app.use(express.static(__dirname + '/../public'));


// store.dispatch(setInitialTags(Tags));
// store.dispatch(addTag({id: 2, str: "tagthree"}));
// console.log(store.getState());
let initialState;

app.get('/', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><About/></ReactApp></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});
app.get('/admin', (req, res) => {//TODO:HTTPS
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
app.get('/about', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let content = ReactDOM.renderToString(<Provider store={store}><ReactApp/></Provider>);
    let response = renderHTML(content, initialState);
    res.send(response);
});

app.get('/contact', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content: appContent});
});
app.get('/blog/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    queryBlogPosts(0, 50)//TODO:
        .then(data=> {//TODO:This is really bad
            store.dispatch(loadBlogPost(data.Items.filter((blogpost)=> {
                return blogpost.title === decodeURIComponent(req.params.blogTitle)
            })[0]))
        })
        .then(()=> {
            let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><BlogPost/></ReactApp></Provider>);
            let response = renderHTML(content, store.getState());
            res.send(response);
        });
    //TODO:Write query function which gets the right blogpost!

});
app.post('/blog/:blogTitle', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "POST",
        path: req.path
    });
    queryBlogPosts(0, 50)
        .then(data=> {//TODO:This is really bad
            req.path.split("/")
            return data.Items.filter((blogpost)=> {
                return blogpost.title === decodeURIComponent(req.params.blogTitle)
            })[0]
        })
        .then((blogPost)=> {
            res.send(blogPost);
        });
    //TODO:Write query function which gets the right blogpost!

});


app.get('/blog', (req, res) => {//TODO:Better regex, only match /string_like_this
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        if (!result) {
            let content = ReactDOM.renderToString(<Provider store={store}><ReactApp><Blog loggedIn={false}/></ReactApp></Provider>);
            let response = renderHTML(content, initialState);
            res.send(response);
        }
        else {
            console.log("okkke")
            let content = <Provider store={store}><ReactApp><Blog loggedIn={true}/></ReactApp></Provider>;
            let response = renderHTML(content, initialState);
            res.send(response);
        }
    })

});

app.get('/projects', (req, res) => {
    "use strict";
    console.log({
        reuqestType: "GET",
        path: req.path
    });
    let appContent = ReactDOM.renderToString(React.createElement(ReactApp));
    res.render('cv', {content: appContent});
});
/* This is the handler for hiding admin side scripts from client*/
app.get('/private/script.js', (req, res) => {

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
//*******************************POST REQUESTS
app.post("/getTags", (req, res)=> {
    checkHash(req.cookies.name, req.cookies.hash).then((result)=> {
        if (result) {
            res.send({tags: ["tagone", "tagtwo..."]});
        }
        else {
            res.send({errormsg: "wrong pw user"});
        }
    });
});
app.post("/adminlogged", (req, res)=> {
    checkPassword(req.body.user, req.body.password).then((result)=> {
        if (result) {
            console.log("goodpw")
            res.send({name: req.body.user, hash: admins[req.body.user].hash});
        }
        else {
            res.send({errormsg: "wrong pw user"});
        }
    });
});
app.post("/logout", (req, res)=> {
    res.cookie('name', '', {Expires: new Date().toISOString(), path: '/'});
    res.cookie('hash', '', {Expires: new Date().toISOString(), path: '/'});
    res.redirect('/admin');
});
app.post("/newblogpost", (req, res)=> {//TODO: Auth...
    console.log(req.body)
    if (req.body.text != "") {
        blogPostToDb({
            text: req.body.text,
            date: (new Date).toISOString(),
            user: req.cookies.name,
            tags: req.body.tags,
            title: req.body.title
        });
    }
    res.redirect('/admin')
});
app.post("/admin", (req, res)=> {
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
app.post("/getBlogPosts", (req, res)=> {//TODO:error handling
    console.log({
        currentBlogPostIds: req.body.currentBlogPostIds,
        activeTags: req.body.activeTags,
        numberOfPostsToReturn: req.body.numberOfPostsToReturn
    });
    queryBlogPosts(req.body.currentBlogPostIds ? req.body.currentBlogPostIds : [],
        req.body.activeTags ? req.body.activeTags : [], req.body.numberOfPostsToReturn)
        .then((data)=> {
            res.send(data)
        })
});
//*******************************END OF POST REQUESTS
/*https.createServer(credentials,app).listen(process.env.PORT || 3000, function () {
 console.log("Development server is listening on port: 3000");
 });*/
http.createServer(app).listen(process.env.PORT || 3000, function () {
    console.log("Development server is listening on port: 3000");
});