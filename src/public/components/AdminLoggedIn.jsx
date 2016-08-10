import React from "react";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        Tags: state.Tags
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {return {}};
const Tag =(tag,addTagToField)=>{
    return(
        <a key={tag.id} onClick={()=>{addTagToField(tag.str)}}>{tag.str+" "}</a>
    )}
const TagList = ({Tags,addTagToField})=> {
    return(
        <div>
            {Tags.map((tag)=> {
                return Tag(tag, addTagToField) //TODO:This is wrong!!! You should call this as a react component
            })
            }</div>
    );
};
const TagListWithStore = connect(mapStateToProps, mapDispatchToProps)(TagList)

class PostEditor extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                <form method="post" action="/newblogpost">
                    <textarea className="form-control" name="title" rows="1" placeholder="title"></textarea>
                    <br/><br/>
                    <textarea className="form-control" name="text" rows="15" placeholder="blogpost"></textarea>
                    <br/><br/>
                    <textarea ref={(ref)=>this.tagEditor = ref} className="form-control" name="tags" rows="3"
                              placeholder="tags"></textarea>
                    <br/>
                    <input type="submit" value="Post"/>
                </form>
                <form method="post" action="/logout">
                    <input type="submit" value="Logout"/>
                </form>
            </div>
        )
    }
}
export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.addTagToField = this.addTagToField.bind(this)
    };
    componentDidMount() {
        //this.getTagsAjax()
    }
    addTagToField(tag){
        let currentTags = this.postEditor.tagEditor.value.split(" ")
        if (currentTags.indexOf(tag)===-1)//String not found in tags
        this.postEditor.tagEditor.value += " " + tag;
    }

    render() {//TODO:Use react components for everything!
        return (
            <div className="row">
                <div className="col-xs-8">
                    <PostEditor ref={(ref)=>this.postEditor=ref}/>
                </div>
                <div className="col-xs-4">
                    <TagListWithStore addTagToField={this.addTagToField}/>
                </div>
            </div>
        );
    };
}
//
export default AdminLoggedIn