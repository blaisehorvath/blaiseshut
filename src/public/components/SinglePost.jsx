import React from "react";
import {loadBlogPost} from "../reducers/StoreAndReducers"
import {connect} from "react-redux"
const mapStateToProps = (state, ownProps) => {
    return {
        blogPost: state.BlogPost
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAjaxBlogPost: (blogPost)=> {
            dispatch(loadBlogPost(blogPost))
        }

    }
};
class SinglePostWithoutStore extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.blogTitle) {// If we are coming from blog or somewhere else from this site on front end
            $.ajax({// This could be sooo much better without this
                type: 'POST',
                url: this.props.blogTitle.path
            }).done((blogPost)=> {
                this.props.onAjaxBlogPost(blogPost) // Comes from the connect..
            })
        }
    }
    render() {
        return <div> <br/><br/><br/>
            <div>{this.props.blogPost.title}</div>
            <div>{this.props.blogPost.user}</div>
            <div>{this.props.blogPost.date}</div>
            <div>{this.props.blogPost.precontent}</div>
            <div>{this.props.blogPost.text}</div>
            <div>{this.props.blogPost.tags}</div>
        </div>
    }
}
const SinglePost = connect(mapStateToProps, mapDispatchToProps)(SinglePostWithoutStore);
export default SinglePost