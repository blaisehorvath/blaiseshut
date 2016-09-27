import React from "react"

import BlogPostPreview from "./BlogPostPreview"

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        //TODO:Window.scrool check here
    }

    componentDidMount() {
        if (this.props.posts.length < 2)
            this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numberOfPostsToReturn) {
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
                        <PostLoader/>
                    </div>
                </div>);//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }
}

const PostLoader = (props) => {
    return (
        <div className="postLoader">
            <i className="fa fa-refresh fa-spin fa-3x fa-fw"/>
            <span className="sr-only">Loading...</span>
        </div>
    );
};


export default BlogPosts