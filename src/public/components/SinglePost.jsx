import React from "react";
import {loadBlogPost} from "../reducers/StoreAndReducers"
import {connect} from "react-redux"
const mapStateToProps = (state, ownProps) => {

    return {
        blogPostAjax: state.BlogPost
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAjaxBlogPost: (blogPost)=>
        {
            console.log('hereindispatch', blogPost)
            dispatch(loadBlogPost(blogPost))
        }

    }
};
class SinglePostWithoutStore extends React.Component {
    constructor(props) {
        super(props);
        this.blogPost = {user: 0, date: 0, title: 0, precontent: 0, text: 0, text: 0}//DEBUG
        if (this.props.blogPostFromServer === undefined) {//Front-end rendering
            $.ajax({
                type: 'POST',
                url: this.props.blogTitle.path
            }).done((blogPost)=> {
                this.props.onAjaxBlogPost(blogPost) // Comes from the connect..
                console.log(this)
            })

        }
        else this.blogPost = this.props.blogPostFromServer;
    }

    render() {
        return <div> fasz
            <div>{this.blogPost.date}</div>
            <div>{this.blogPost.user}</div>
            <div>{this.blogPost.title}</div>
            <div>{this.blogPost.precontent}</div>
            <div>{this.blogPost.text}</div>
            <div>{this.blogPost.tags}</div>
        </div>
    }
}
const SinglePost = connect(mapStateToProps,mapDispatchToProps)(SinglePostWithoutStore);
export default SinglePost