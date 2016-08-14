import React from "react"
import SinglePost from "../containers/SinglePost"
const BlogPost =({blogTitle})=>{
    return (<div>
        <SinglePost blogTitle={blogTitle}/>
    </div>)
};
export default BlogPost