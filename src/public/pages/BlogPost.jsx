import React from "react";

import {connect} from "react-redux"
import {changeActivePage} from "../actions/actions"
import {loadBlogPost} from "../reducers/StoreAndReducers"
import Markdown from "react-markdown"
/***
 * This react component class is responsible for rendering a whole single blog post.
 * @class
 */
class BlogPost extends React.Component {
    /**
     * @param props.props.blogPost {Object} An object that holds information about the props.blogPost.
     * @param props.blogPost.date {string} The date when the props.blogPost was published.
     * @param props.blogPost.title {string} The title of the props.blogPost.
     * @param props.blogPost.tags
     * @returns {XML} The HTML markup of the component
     * @constructor
     */
    constructor(props) {
        super(props);
        //converting the blogpost's date to a human readable format
        this.date = new Date(props.blogPost.date).toDateString();
    }

    //TODO: 1) create social information based on store 2) add documentations
    componentDidMount() {
        //setting the active page
        this.props.setActiveMenuButton();

        $(".socialButtons").jsSocials({
            shares: ["facebook", "twitter", "linkedin", "email"],
            url: "http://hackaday.com/",
            showLabel: false,
            showCount: false,
            text: this.props.blogPost.precontent,
            shareIn: "popup"
        });
    }


    render() {
        return (
            <section id="blogPost">
                <div className="container">
                    <div className="postHeader">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="postTitle">{this.props.blogPost.title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 pull-left postAuthor">
                                <div>Post by <a>{this.props.blogPost.user}</a></div>
                            </div>
                            <div className="col-sm-6 postDate">
                                <div>{this.date}</div>
                                <div className="">Share on <span className="socialButtons"/></div>
                            </div>
                        </div>
                    </div>
                    <hr className="headerSep"/>
                    <div className="row postBody">
                        <div className="col-sm-12"><Markdown
                            source={this.props.blogPost.precontent + this.props.blogPost.text}/></div>
                    </div>
                    <hr className="footerSep"/>
                    <div className="postFooter row">
                        <div className="col-sm-12">
                            <span
                                className="postTagsIcon glyphicon glyphicon-tags"/><span>{this.props.blogPost.tags}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
// ingjecting the active blogpost from the state to the props
const mapStateToProps = (state) => {
    return {
        blogPost: state.BlogPost
    };
};

// setting the activeMenuButton to blog
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveMenuButton: () => {
            dispatch(changeActivePage("blogPost"))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
