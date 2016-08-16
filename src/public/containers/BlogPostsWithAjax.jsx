import React from "react"
import {connect} from "react-redux"
import BlogPosts from "../components/BlogPosts"
import {addBlogPosts} from "../reducers/StoreAndReducers"
const mapStateToPropsBlogPosts = (state)=> {
    return {
        posts: state.BlogPosts.posts,
        lastBlogPost: state.BlogPosts.lastBlogPost,
        activeBlogPosts: state.ActiveTags?
            //maybe the tags in posts should be a tag type with ref etc...
            state.BlogPosts.posts.filter(post=>
            state.ActiveTags
                .map(tag=>tag.name)
                .reduce((prev,curr)=>
                post.tags.split(" ").indexOf(curr)>-1 && prev,true))
                :state.BlogPosts.posts, // TODO:Filter here to show only in descending ID!!!!
        activeTags: state.ActiveTags
    }
};
const mapDispatchToPropsBlogPosts = (dispatch,ownProps)=> {
    return {
        onAjaxFinish: (posts)=> {
            dispatch(addBlogPosts(posts))
        }
    };
};
const BlogPostsWithAjax = connect(mapStateToPropsBlogPosts, mapDispatchToPropsBlogPosts)(BlogPosts);
export default BlogPostsWithAjax

/*
* state.BlogPosts.posts.filter(
 (post)=>{state.ActiveTags.map(tag=>tag.name).reduce((previousBool,activeTag)=>{post.tags.split(" ").
 indexOf(activeTag)>-1 && previousBool},true)
 })


 this is good:
 state.BlogPosts.posts.filter(             (post)=>state.ActiveTags.map(tag=>tag.name).reduce((prev,curr)=>post.tags.split(" ").indexOf(curr)>-1 && prev,true))
* */