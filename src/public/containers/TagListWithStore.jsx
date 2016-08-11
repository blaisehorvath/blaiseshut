import { connect } from 'react-redux'
//TODO: This code didnt worked well when imported!!!???
const mapStateToPropsTagList = (state, ownProps) => {
    return {
        Tags: state.Tags
    }
};
const mapDispatchToPropsTagList = (dispatch, ownProps) => {
    return {}
};
const Tag = ({tag, addTagToField})=> {
    return (
        <a onClick={()=> {
            addTagToField(tag.name)
        }}>{tag.name + " "}</a>
    )
};
const TagList = ({Tags, addTagToField})=> {
    return (
        <div>
            {Tags.map((tag)=> {
                return <Tag key={tag.id} tag={tag} addTagToField={addTagToField}/>
            })}
        </div>
    );
};
const TagListWithStore = connect(mapStateToPropsTagList, mapDispatchToPropsTagList)(TagList)
export default TagListWithStore;