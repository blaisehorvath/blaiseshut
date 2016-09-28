import React from "react";
import {connect} from "react-redux";

import BlogPostPreview from "./BlogPostPreview"

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.posts.length < 2)
            this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numberOfPostsToReturn) {
        this.props.onAjaxBegin(); // Comes from the connect, ugly AF for Balazs... :D
        //TODO:Maybe this could be a little bit earlier?
        let data = {
            currentBlogPostIds: this.props.posts.map(post=>post.id),
            numberOfPostsToReturn,
            activeTags: this.props.activeTags
        };
        $.ajax({
            type: 'POST',
            url: '/getBlogPosts',
            data,
        }).done((data)=> {
            this.props.onAjaxFinish(data);// Comes from the connect..
        })
    }

    render() {
        if (this.props.posts) {
            if ((this.props.isBottom && !this.props.postLoading))
                this.getNewBlogPosts(1);
            //TODO: We should listen to these events and call this function.. Not related to render!!!!
            return (
                <div>
                    {
                        this.props.activeBlogPosts.map(post => {//TODO:This is not the BLOG! loggedIn is elsewhere
                            return <div key={post.id}>
                                <BlogPostPreview post={post}/>
                            </div>
                        })}
                    <div className="panel" style={{height:50}}>{this.props.postLoading?<PostLoader/>:null}
                    </div>
                </div>);
        }//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }
}

const PostLoaderComp = () => {
    //if(!props.loading && props.bottom) props.newPostsFn(1);
    //TODO: If the function is passed then we get no error, weird....
    //TODO: Check if we can load any more blogPosts, not important
        return (
            <div className="postLoader">
                <i className="fa fa-refresh fa-spin fa-3x fa-fw"/>
                <span className="sr-only">Loading...</span>
            </div>
        );
};

let PostLoader = connect((state)=>({loading: state.postLoading}))(PostLoaderComp);


export default BlogPosts