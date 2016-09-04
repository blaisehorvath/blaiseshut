/**
 * Created by v on 8/19/16.
 */
import AWS from "aws-sdk";
import React from "react";
/*App*/
import hipsteripsom from 'hipsteripsum'
import BlogPost from "../public/pages/BlogPost"

import {store} from './server'
import {setInitialTags} from "../public/reducers/StoreAndReducers"

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
            Tags = tags;
        })
};
getTags();

//*******************************************************END OF DB SETUP************************************************
export {queryBlogPosts, blogPostToDb, Tags}