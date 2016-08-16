import { connect } from 'react-redux'
import React from 'react'
import {switchActiveTag} from '../reducers/StoreAndReducers'

const mapStateToProps = (state, ownProps) => {
    return {
        active: (state.ActiveTags.indexOf(ownProps.tag) > -1)
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchToActiveTags:()=>{
            dispatch(switchActiveTag(ownProps.tag));
        }
    }
};


const Tag = ({tag, addTagToField, active,dispatchToActiveTags})=> {
    return (
        <a style={active?{color:'red'}:{color:'blue'}} onClick={()=> {
            dispatchToActiveTags();
            addTagToField(tag.name)
        }}>{tag.name + " "}</a>
    )
};

const SingleTag = connect(mapStateToProps,mapDispatchToProps)(Tag);
export default SingleTag;