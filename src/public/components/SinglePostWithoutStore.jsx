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
                        <div className="col-sm-6 pull-left postAuthor">
                            <div>Post by <a>{blogPost.user}</a></div>
                        </div>
                        <div className="col-sm-6 postDate">
                            <div>{date}</div>
                        </div>
                    </div>
                </div>
                <hr className="headerSep"/>
                <div className="row postBody">
                    <div className="col-sm-12">{blogPost.precontent}</div>
                    <div className="col-sm-12">{blogPost.text}</div>
                </div>
                <hr className="footerSep"/>
                <div className="postFooter row">
                    <div className="col-sm-12">
                        <span className="postTagsIcon glyphicon glyphicon-tags"/><span>{blogPost.tags}</span>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SinglePostWithoutStore
