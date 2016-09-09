import React from "react"
const SinglePostWithoutStore = ({blogPost})=> {
    //converting the blogpost's date to a human readable format
    let date = new Date(blogPost.date).toDateString();
    return (
        <section id="singleBlogPost">
            <div className="container">
                <div className="postHeader">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="postTitle">{blogPost.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 postAuthor">
                            <div>Post by {blogPost.user}</div>
                        </div>
                        <div className="col-sm-6 pull-right postDate">
                            <div>{date}</div>
                        </div>
                    </div>
                </div>
                <div className="row postBody">
                    <div className="col-sm-12">{blogPost.precontent}</div>
                    <div className="col-sm-12">{blogPost.text}</div>
                </div>
                <div className="postFooter row">
                    <span className="postTagsIcon glyphicon glyphicon-tags"></span><span>{blogPost.tags}</span>
                </div>
            </div>
        </section>
    )
};
export default SinglePostWithoutStore
