import React from "react"
const BlogPost = ({post, loggedIn})=> {
    return <div className="blogPost panel panel-default">
        <div className="panel-heading">
            <div className="row">
                <div className="postAuthor col-xs-8">
                    <div>Post by {post.user}</div>
                    <h2>{post.title}</h2>
                </div>
                <div className="postDate col-xs-4 pull-right">Created on {post.date}</div>
            </div>
        </div>
        <div className="panel-body">{post.text}</div>
        <div className="panel-footer">
            {post.tags.toString()+"          "}
            <a method="get" href={"/blog/" + encodeURIComponent(post.title)}>Read more!</a>
            {loggedIn?<a method="get" href={"/admin/" + encodeURIComponent(post.title)}>          Edit!</a>:""}
        </div>
    </div>
};
export default BlogPost