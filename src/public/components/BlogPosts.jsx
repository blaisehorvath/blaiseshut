import React from "react";
import {connect} from "react-redux";

import BlogPostPreview from "./BlogPostPreview"

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.didMount = false;
        //TODO:Window.scrool check here
    }

    componentDidMount() {
        console.log(this.props)
        this.didMount = true;
        if (this.props.posts.length < 2)
            this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numberOfPostsToReturn) {
        this.props.onAjaxBegin(); // Comes from the connect, ugly AF for Balazs... :D
        //TODO:Maybe this could be a little bit earlier?
        console.log("getting fasz" + numberOfPostsToReturn)
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
            console.log(this.props)
            if ((this.props.isBottom && !this.props.postLoading))
                this.getNewBlogPosts(1);
            return (
                <div>
                    {
                        this.props.activeBlogPosts.map(post => {//TODO:This is not the BLOG! loggedIn is elsewhere
                            return <div key={post.id}>
                                <BlogPostPreview post={post}/>
                            </div>
                        })}
                    <div className="panel">
                        <PostLoader newPostsFn={this.getNewBlogPosts.bind(this)} bottom={this.props.isBottom}
                                    loading={this.props.postLoading}/>
                    </div>
                </div>);
        }//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }
}

const PostLoaderComp = (props) => {
    //if(!props.loading && props.bottom) props.newPostsFn(1);
    //TODO: If the function is passed then we get no error, weird....
    if (props.loading) {
        return (
            <div className="postLoader">
                <i className="fa fa-refresh fa-spin fa-3x fa-fw"/>
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        return <div></div>
    }
};

let PostLoader = connect((state)=>({loading: state.postLoading}))(PostLoaderComp);


export default BlogPosts