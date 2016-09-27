import React from "react";
import { connect } from "react-redux";

import BlogPostPreview from "./BlogPostPreview"

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.didMount = false;
        //TODO:Window.scrool check here
    }

    componentDidMount() {
        this.didMount = true;
        if (this.props.posts.length < 2)
            this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numberOfPostsToReturn) {
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
        if (this.props.posts)
            return (
                <div>
                    {
                    this.props.activeBlogPosts.map(post => {//TODO:This is not the BLOG! loggedIn is elsewhere
                        return <div key={post.id}>
                            <BlogPostPreview post={post}/>
                        </div>
                    })}
                    <div onClick={()=> {
                        this.getNewBlogPosts(1)
                    }} className="panel">Show me more
                        <PostLoader getNewBlogPosts={this.getNewBlogPosts.bind(this)} mountReady={this.didMount}/>
                    </div>
                </div>);//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }
}

const PostLoaderComp = (props) => {
    if (props.loading) {
        console.log(props)
        return (
            <div className="postLoader">
                <i className="fa fa-refresh fa-spin fa-3x fa-fw"/>
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        console.log(props)
        if( props.mountReady) props.getNewBlogPosts(4);
        return <div>LOL</div>
    }
};

let PostLoader = connect((state)=>({ loading : state.postLoading }))(PostLoaderComp);


export default BlogPosts