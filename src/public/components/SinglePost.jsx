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
        onAjaxBlogPost: (blogPost)=>
        {
            dispatch(loadBlogPost(blogPost))
        }

    }
};
class SinglePostWithoutStore extends React.Component {
    constructor(props) {
        super(props);
    }
        componentWillMount(){
             if (this.props.blogPostFromServer === undefined) {//Front-end rendering
                $.ajax({
                    type: 'POST',
                    url: this.props.blogTitle.path
                }).done((blogPost)=> {
                    this.props.onAjaxBlogPost(blogPost) // Comes from the connect..
                })
             }
        }


    render() {
        return <div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.date:this.props.blogPostFromServer.date}</div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.user:this.props.blogPostFromServer.user}</div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.title:this.props.blogPostFromServer.title}</div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.precontent:this.props.blogPostFromServer.precontent}</div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.text:this.props.blogPostFromServer.text}</div>
            <div>{(this.props.blogPostFromServer===undefined)?this.props.blogPost.tags:this.props.blogPostFromServer.tags}</div>
        </div>
    }
}
const SinglePost = connect(mapStateToProps,mapDispatchToProps)(SinglePostWithoutStore);
export default SinglePost