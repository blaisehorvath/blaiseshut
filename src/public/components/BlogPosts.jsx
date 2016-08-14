import React from "react"

import BlogPost from "../components/BlogPost"

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        //TODO:Window.scrool check here
    }
    componentDidMount() {
        this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numOfNewPosts) {
        //TODO:Maybe this could be a little bit earlier?
            let data = {
                lastBlogPost: this.props.lastBlogPost,
                queryBlogNum: numOfNewPosts
            };
        $.ajax({
            type: 'POST',
            url: '/getBlogPosts',
            data,
        }).done((data)=> {
            this.props.onAjaxFinish(data.Items);// Comes from the connect..
        })
    }

    render() {
        if(this.props.posts)
            return (<div>{this.props.posts.map(
                post=> {//TODO:This is not the BLOG! loggedIn is elsewhere
                    return <div key={post.id}>
                        <BlogPost post={post} loggedIn={this.props.loggedIn}/>
                    </div>
                })}<div onClick={()=>{this.getNewBlogPosts(1)}} className="panel">Show me more!! <br/><br/></div></div>);//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }

}

export default BlogPosts