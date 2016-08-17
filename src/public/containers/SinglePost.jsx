import React from "react";

import {connect} from "react-redux"
import {loadBlogPost} from "../reducers/StoreAndReducers"

import SinglePostWithoutStore from "../components/SinglePostWithoutStore"

const mapStateToProps = (state, ownProps) => {
    return {
        blogPost: state.BlogPost
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};
const SinglePost = connect(mapStateToProps, mapDispatchToProps)(SinglePostWithoutStore);
export default SinglePost