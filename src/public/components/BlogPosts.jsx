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
            /*if ((this.props.isBottom && !this.props.postLoading))
             this.getNewBlogPosts(1);*/
            //TODO: We should listen to these events and call this function.. Not related to render!!!!
            return (
                <div>
                    {
                        this.props.activeBlogPosts.map(post => {
                            return <div key={post.id}>
                                <BlogPostPreview post={post}/>
                            </div>
                        })}
                    <div className="panel" style={{height:20}}>{this.props.postLoading ? <PostLoader/> : null}
                    </div>
                </div>);
        }//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }
}

const PostLoaderComp = () => {
    return (
        <div className="postLoader">
            <i className="fa fa-refresh fa-spin fa-3x fa-fw"/>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

let PostLoader = connect((state)=>({loading: state.postLoading}))(PostLoaderComp);


export default BlogPosts