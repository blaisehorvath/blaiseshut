import React from "react"
import {loadBlogPost} from '../reducers/StoreAndReducers'
import {connect} from 'react-redux'
import page from 'page'
const BlogPost = ({post, loggedIn, dispatch})=> {
    return <div className="blogPost panel panel-default">
        <div className="panel-heading">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="postTitle" onClick={goToBlogpost.bind({}, post, dispatch)}>{post.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="postAuthor col-xs-6">Post by <i>{post.user}</i></div>
                <div className="postDate col-xs-6">{post.date}</div>
            </div>
        </div>
        <div className="panel-body">
            {post.text}

            <a className="readMore" onClick={goToBlogpost.bind({}, post, dispatch)}>
                Read more!
            </a>

            {loggedIn ? <a onClick={()=> {
                dispatch(loadBlogPost(post));
                page.redirect("/admin/" + encodeURIComponent(post.title))
            }}> Edit!</a> : ""}

        </div>
        <div className="panel-footer">
            <span className="glyphicon glyphicon-tags"/>
            {post.tags.toString()}

        </div>
    </div>
};

/**
 * This function uses the page front-end router module to go to another blogpost.
 * Warning! Don't use page.redirect function for this, because is cleans
 * the browser history and the user can't come back
 * @param post {Object} An object that contains the blogpost
 * @param dispatch {function} A function that informs the store about the change
 */
const goToBlogpost = (post, dispatch) => {
    dispatch(loadBlogPost(post));
    page("/blog/" + encodeURIComponent(post.title));
};

export default connect()(BlogPost)