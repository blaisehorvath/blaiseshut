import React from "react"
const SinglePostWithoutStore = ({blogPost})=> {
    return <div><br/><br/><br/><br/><br/>
        <div>{blogPost.title}</div>
        <div>{blogPost.user}</div>
        <div>{blogPost.date}</div>
        <div>{blogPost.precontent}</div>
        <div>{blogPost.text}</div>
        <div>{blogPost.tags}</div>
    </div>
};
export default SinglePostWithoutStore