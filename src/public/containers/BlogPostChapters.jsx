import { connect } from 'react-redux'
import React from 'react'
import BlogPostHeader from "../containers/BlogPostHeader"
//TODO: This code didnt worked well when imported!!!???
const mapStateToPropsTagList = (state, ownProps) => {
    return {
        headers: state.postHeaders
    }
};
const mapDispatchToPropsTagList = (dispatch, ownProps) => {
    return {}
};
const BlogPostChapters = ({headers})=> {
    return (
        <div>
            {headers.map((header,index)=> {
                return <div><BlogPostHeader key={index} header={header}/><br/></div>
            })}
        </div>
    );
};
export default connect(mapStateToPropsTagList, mapDispatchToPropsTagList)(BlogPostChapters);