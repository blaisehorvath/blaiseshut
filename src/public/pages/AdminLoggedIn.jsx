import React from "react";

import TagListWithStore from '../containers/TagListWithStore'
import PostEditor from "../components/PostEditor"

export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {//TODO:Use react components for everything!
        return (//TODO:Redo this, communicate in store...
            <div className="row">
                <div className="col-xs-8">
                    <PostEditor ref={(ref)=>this.postEditor = ref}/>
                </div>
                <div className="col-xs-4">
                    <TagListWithStore/>
                </div>
            </div>
        );
    };
}
//
export default AdminLoggedIn