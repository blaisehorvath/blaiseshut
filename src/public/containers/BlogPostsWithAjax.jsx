import React from "react"
import {connect} from "react-redux"
import BlogPosts from "../components/BlogPosts"
import {addBlogPosts} from "../reducers/StoreAndReducers"
const mapStateToPropsBlogPosts = (state, ownProps)=> {
    return {
        posts: state.BlogPosts,
        activeBlogPosts: state.ActiveTags
            //TODO: Filter differently when tags are not present. Ordering is ready in the store
            //maybe the tags in posts should be a tag type with ref etc...
            ?state.BlogPosts.filter(post=>
                state.ActiveTags
                    .map(tag=>tag.name)
                    .reduce((prev, curr)=>
                    post.tags.split(" ").indexOf(curr) > -1 && prev, true))
            : state.BlogPosts,
        activeTags: state.ActiveTags
    };
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