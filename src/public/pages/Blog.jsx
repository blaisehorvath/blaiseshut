import React from "react";

import TagListWithStore from "../containers/TagListWithStore"
import BlogPostsWithAjax from "../containers/BlogPostsWithAjax"
//TODO:
/*
* 1: The blogPosts in the store should use immutable
* 2: You should filter the results with the clicked tag
* 3: If theres not enough results to fill the page with enough posts we should request for more posts with given id
* 4: If the tag is clicked again we should jump to normal view again
* 5: If we've jumped back then we should jump back to the original view of blogpost, and don't show the previously requested
* filtered blogposts if their id is not continous.....
* Maybe you don't need immutable yet, just order blogpost until the next element is empty when you change back? This should be ok...
* */
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