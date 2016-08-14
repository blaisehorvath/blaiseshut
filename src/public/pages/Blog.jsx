import React from "react";

import TagListWithStore from "../containers/TagListWithStore"
import BlogPostsWithAjax from "../containers/BlogPostsWithAjax"

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {// TODO: Better styling
        return (
            <div className="row">
                <div className="col-xs-8">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <BlogPostsWithAjax/>
                </div>
                <div className="col-xs-4">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <TagListWithStore/>
                </div>
            </div>

        )
    }
};

export default Blog