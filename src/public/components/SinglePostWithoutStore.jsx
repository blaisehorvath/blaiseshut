import React from "react"
const SinglePostWithoutStore = ({blogPost})=> {
    //converting the blogpost's date to a human readable format
    let date = new Date(blogPost).toDateString();
    return (
        <section id="singleBlogPost">
            <div className="container">
                <div className="postHeader row">
                    <div className="col-12">
                        <h1 className="postTitle">{blogPost.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div>{blogPost.user}</div>
                    </div>
                    <div className="col-6">
                        {date}
                    </div>
                </div>
                <div className="row postContent">
                    <div className="col-12">{blogPost.precontent}</div>
                    <div className="col-12">{blogPost.text}</div>
                </div>
                <div className="postFooter row">
                    <span className="postTagsIcon glyphicon glyphicon-tags"></span><span>{blogPost.tags}</span>
                </div>
            </div>
        </section>
    )
};
export default SinglePostWithoutStore
