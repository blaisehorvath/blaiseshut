import { connect } from 'react-redux'
import React from 'react'
import SingleTag from "../containers/SingleTag"
//TODO: This code didnt worked well when imported!!!???
const mapStateToPropsTagList = (state, ownProps) => {
    console.log()
    return {
        Tags: state.Tags
    }
};
const mapDispatchToPropsTagList = (dispatch, ownProps) => {
    return {}
};
const TagList = ({Tags, addTagToField})=> {
    return (
        <div>
            {Tags.map((tag)=> {
                return <SingleTag key={tag.id} tag={tag} addTagToField={addTagToField}/>
            })}
        </div>
    );
};
const TagListWithStore = connect(mapStateToPropsTagList, mapDispatchToPropsTagList)(TagList)
export default TagListWithStore;