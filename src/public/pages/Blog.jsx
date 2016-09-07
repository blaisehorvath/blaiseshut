import React from "react";
import { connect } from "react-redux";

import TagListWithStore from "../containers/TagListWithStore"
import BlogPostsWithAjax from "../containers/BlogPostsWithAjax"
import { changeActiveMenuButton } from "../reducers/StoreAndReducers";
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
class Blog extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        //this.props.dispatch(changeActiveMenuButton('blog'))
    };


    render() {// TODO: Better styling
        return (
            <section id="blog">
                <div className="container">
                    <div className="col-xs-4 col-md-2 pull-right blogTags">
                        <TagListWithStore/>
                    </div>
                    <div className="col-xs-8 col-md-10 blogContent">
                        <BlogPostsWithAjax/>
                    </div>
                </div>
            </section>
        )
    }
};

export default connect()(Blog);