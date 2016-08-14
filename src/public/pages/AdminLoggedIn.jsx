import React from "react";

import TagListWithStore from '../containers/TagListWithStore'
import PostEditor from "../components/PostEditor"

export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.addTagToField = this.addTagToField.bind(this)
    };

    addTagToField(tag) {
        let currentTags = this.postEditor.tagEditor.value.split(" ");
        if (currentTags.indexOf(tag) === -1)//String not found in tags
            this.postEditor.tagEditor.value += " " + tag;
    }

    render() {//TODO:Use react components for everything!
        return (
            <div className="row">
                <div className="col-xs-8">
                    <PostEditor ref={(ref)=>this.postEditor = ref}/>
                </div>
                <div className="col-xs-4">
                    <br/><br/><br/><br/><br/><br/>
                    <TagListWithStore addTagToField={this.addTagToField}/>
                </div>
            </div>
        );
    };
}
//
export default AdminLoggedIn