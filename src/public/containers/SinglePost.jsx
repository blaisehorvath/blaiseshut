import React from "react";

import {connect} from "react-redux"
import {loadBlogPost} from "../reducers/StoreAndReducers"

import SinglePostWithoutStore from "../components/SinglePostWithoutStore"



const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        blogPost: state.BlogPost
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAjaxBlogPost: (blogPost)=> {
            console.log({blogPost});
            dispatch(loadBlogPost(blogPost))
        }

    };
};
const SinglePost = connect(mapStateToProps, mapDispatchToProps)(SinglePostWithoutStore);
export default SinglePost