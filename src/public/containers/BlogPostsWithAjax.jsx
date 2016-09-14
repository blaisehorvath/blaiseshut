import React from "react"
import {connect} from "react-redux"
import BlogPosts from "../components/BlogPosts"
import {addBlogPosts} from "../reducers/StoreAndReducers"
const mapStateToPropsBlogPosts = (state, ownProps)=> {
    return {
        posts: state.BlogPosts,
        activeBlogPosts: (()=> {
            if (!state.BlogPosts.length) return state.BlogPosts
            else return state.ActiveTags.length
                //TODO: Filter differently when tags are not present. Ordering is ready in the store
                //maybe the tags in posts should be a tag type with ref etc...
                ? state.BlogPosts.filter(post=>
                state.ActiveTags
                    .map(tag=>tag.name)
                    .reduce((prev, curr)=>
                    post.tags.split(" ").indexOf(curr) > -1 && prev, true))
                : state.BlogPosts
                .filter((post, idx, arr)=>
                arr.reduce((prev, curr, idx, arr)=> {// Get the last good index
                    if (prev.finished) return prev;
                    else if (arr[idx + 1] !== undefined && "id" in arr[idx + 1]) {
                        return {lastRightIndex: idx, finished: (arr[idx + 1].id !== curr.id - 1)}
                    } else return {lastRightIndex: idx, finished: true}
                }, {lastRightIndex: 0, finished: false}).lastRightIndex
                >= idx)
        })(),
        activeTags: state.ActiveTags,
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