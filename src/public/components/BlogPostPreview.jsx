import React from "react"
import {loadBlogPost} from '../reducers/StoreAndReducers'
import {connect} from 'react-redux'
import page from 'page'

/**
 * This stateless functional React component is responsible for rendering a preview of a blog post.
 * @param post {Object} An object that holds information about the post.
 * @param post.date {string} The date when the post was published.
 * @param post.title {string} The title of the post.
 * @param post.tags
 * @param loggedIn {bool} A variable that is set to true when the user is authenticated as an admin.
 * @param dispatch {function} A function that connects the componenet to the Redux store and lets it dispatch events to the store.
 * @returns {XML} The HTML markup of the component
 * @constructor
 */
const BlogPostPreview = ({post, dispatch,loggedIn})=> {
    //parsing the date to human readable format
    let date = new Date(post.date).toDateString();

    return (
        <div className="blogPost panel panel-default">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-12">
                        <a className="postTitle" onClick={goToBlogpost.bind({}, post, dispatch)}>{post.title}</a>
                    </div>
                </div>
                <div className="row">
                    <div className="postAuthor col-xs-6">Post by <i>{post.user}</i></div>
                    <div className="postDate col-xs-6">{date}</div>
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
    )
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
    page("/blog/" + post.title.replace(new RegExp(' ','g'),'-'));
};
const mapStateToProps = (state,ownProps)=>{
    return {
        loggedIn: state.LoggedIn
    }
};
export default connect(mapStateToProps)(BlogPostPreview)