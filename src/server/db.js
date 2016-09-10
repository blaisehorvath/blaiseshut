/**
 * Created by v on 8/19/16.
 */
import AWS from "aws-sdk";
import React from "react";
/*App*/
import hipsteripsom from 'hipsteripsum'


import {store} from './server'
import {Provider} from 'react-redux'
import renderHTML from "./renderHTML"

import ReactApp from "../public/components/ReactApp";
import About from "../public/pages/About"
import Admin from "../public/pages/Admin"
import AdminLoggedIn from "../public/pages/AdminLoggedIn"
import Blog from "../public/pages/Blog"
import BlogPost from "../public/pages/BlogPost"
import AppReducer from "../public/reducers/StoreAndReducers"

import _ from "ramda"
import {createStore} from 'redux';
import ReactDOM from "react-dom/server"
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
let fillQueryCache = ()=> {
    return new Promise((res, rej)=> {
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
            res(data);//TODO:UGLY!
        })
    })
};
//TODO:GET TAGS BEFORE SENDIND THE STORE TO ANYONE!!
const getBlogPostByTitle = (title)=>queryCache.Items.filter(post=>post.title === title)[0];
const queryBlogPosts = (currentBlogPostIds, activeTags, numberOfPostsToReturn)=> {//
    return new Promise((resolve, reject)=> {
        //Get all the remaining posts
        let availableBlogPosts = queryCache.Items
            .filter((post)=>currentBlogPostIds.indexOf(post.id.toString()) === -1)
            .sort((a, b)=> { // descending order, TODO: maybe we could order things by date?
                return a.id < b.id ? 1 : -1
            });
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
    return new Promise((resolve, reject)=> {
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
            Tags = tags;
            return tags
        })
};
const pathsAndStores = {
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
    '/admin': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true});
            this.content =
                ReactDOM.renderToString(
                    <Provider store={store}><ReactApp><Admin/></ReactApp></Provider>);
            this.contentLogged =
                ReactDOM.renderToString(
                    <Provider store={store}><ReactApp><AdminLoggedIn></AdminLoggedIn></ReactApp></Provider>);
            this.response = renderHTML(this.content, this.store.getState());
            this.responseLogged = renderHTML(this.contentLogged, this.storeLogged.getState());
            this.getResponse = function (loggedIn) {
                return loggedIn ? this.responseLogged : this.response;
            };
            return this;
        }
    },
    '/admin/:blogTitle': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true});
            this.content =
                ReactDOM.renderToString(
                    <Provider store={store}><ReactApp><Admin/></ReactApp></Provider>);
            this.contentLogged =
                ReactDOM.renderToString(<Provider
                    store={store}><ReactApp><AdminLoggedIn></AdminLoggedIn></ReactApp></Provider>);
            this.response = renderHTML(this.content, this.store.getState());
            this.responseLogged = renderHTML(this.contentLogged, this.storeLogged.getState());
            this.getResponse = function (loggedIn) {
                return loggedIn ? this.responseLogged : this.response;
            };
            return this;
        }
    },
    '/aboutUs': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false, activeMenuButton: "aboutUs"});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true, activeMenuButton: "aboutUs"});
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
        }
    },
    '/projects': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false, activeMenuButton: "projects"});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true, activeMenuButton: "projects"});
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
        }
    },
    '/team': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false, activeMenuButton: "team"});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true, activeMenuButton: "team"});
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
        }
    },
    '/contactUs': {
        init: function () {
            this.store = createStore(AppReducer, {Tags, LoggedIn: false, activeMenuButton: "contactUs"});
            this.storeLogged = createStore(AppReducer, {Tags, LoggedIn: true, activeMenuButton: "contactUs"});
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
        }
    },
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
    '/blog/:blogTitle': {
        //TODO: encodeURIComponent isn't needed, the request contains the encoded blogTitle already.
        init: function () {
            this.stores = {
                initStore: function () {
                    console.log("Init stores");
                    //TODO: WOW, this is ugly AF
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] = createStore(AppReducer, {
                            Tags,
                            BlogPost: curr,
                            LoggedIn: false
                        });
                        return acc
                    }, this, queryCache.Items)
                }
            }.initStore();
            this.storesLogged = {
                initStoresLogged: function () {
                    console.log("Init storesLogged")
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] = createStore(AppReducer, {
                            Tags,
                            BlogPost: curr,
                            LoggedIn: true
                        });
                        return acc
                    }, this, queryCache.Items)
                }
            }.initStoresLogged();
            this.contents = {
                initContent: function (stores) {
                    console.log("Init contents")
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] = ReactDOM.renderToString(
                            <Provider
                                store={stores[encodeURIComponent(curr.title)]}><ReactApp><BlogPost/></ReactApp></Provider>
                        );
                        return acc
                    }, this, queryCache.Items)
                }
            }.initContent(this.stores);
            this.contentsLogged = {
                initContentsLogged: function (storesLogged) {
                    console.log("Init contentsLogged")
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] = ReactDOM.renderToString(
                            <Provider
                                store={storesLogged[encodeURIComponent(curr.title)]}><ReactApp><BlogPost/></ReactApp></Provider>
                        );
                        return acc
                    }, this, queryCache.Items)
                }
            }.initContentsLogged(this.storesLogged);
            this.responses = {
                initResponse: function (stores, contents) {
                    console.log("Init responeses")
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] =
                            renderHTML(contents[encodeURIComponent(curr.title)], stores[encodeURIComponent(curr.title)].getState());
                        return acc
                    }, this, queryCache.Items)
                }
            }.initResponse(this.stores, this.contents);
            this.responsesLogged = {
                initResponseLogged: function (storesLogged, contentsLogged) {
                    console.log("Init responsesLogged")
                    return _.reduce((acc, curr)=> {
                        acc[encodeURIComponent(curr.title)] =
                            renderHTML(contentsLogged[encodeURIComponent(curr.title)], storesLogged[encodeURIComponent(curr.title)].getState());
                        return acc
                    }, this, queryCache.Items)
                }
            }.initResponseLogged(this.storesLogged, this.contentsLogged);
            this.getResponseWithBlogPost = function (loggedIn, blogPostURI) {
                //TODO: Maybe all the blogPosts should be a propety of the main objects, instead of changing the getResponse function pattern?
                return loggedIn ? this.responsesLogged[blogPostURI] : this.responses[blogPostURI];
            };
            return this;
        }
    },//TODO: Cache as good as possible. response, store and content should be objects with blogpost name props, in which you could filter easily
};
fillQueryCache().then(getTags().then((tags)=> {
    Object.keys(pathsAndStores).forEach((key, index)=> {
        if (pathsAndStores[key].hasOwnProperty('init')) {
            console.log("initializing " + key);
            pathsAndStores[key].init();
        }
    });
}))

//*******************************************************END OF DB SETUP************************************************
export {queryBlogPosts, blogPostToDb, Tags, getTags, pathsAndStores}