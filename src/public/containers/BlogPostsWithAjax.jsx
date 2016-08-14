import React from "react"
import {connect} from "react-redux"
import BlogPosts from "../components/BlogPosts"
import {addBlogPosts} from "../reducers/StoreAndReducers"
const mapStateToPropsBlogPosts = (state)=> {
    return {
        posts: state.BlogPosts.posts,
        lastBlogPost: state.BlogPosts.lastBlogPost
    }
};
const mapDispatchToPropsBlogPosts = (dispatch)=> {
    return {
        onAjaxFinish: (posts)=> {
            dispatch(addBlogPosts(posts))
        }
    };
};
const BlogPostsWithAjax = connect(mapStateToPropsBlogPosts, mapDispatchToPropsBlogPosts)(BlogPosts);
export default BlogPostsWithAjax