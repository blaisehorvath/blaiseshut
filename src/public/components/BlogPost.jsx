import React from "react"
const BlogPost = ({post,loggedIn})=> {
    return <div className="panel panel-default">
        <div className="panel-heading">
            <div className="row">
                <div className="col-xs-8">Post by {post.user} <br/>{post.title}</div>
                <div className="col-xs-4">Creted at {post.date}</div>
            </div>
        </div>
        <div className="panel-body">{post.text}</div>
        <div className="panel-footer">{post.tags.toString() + "   " +
        loggedIn?<a method="get" href={"/blog/"+encodeURIComponent(post.title)}>read more!</a>:""}</div>
    </div>
};
export default BlogPost