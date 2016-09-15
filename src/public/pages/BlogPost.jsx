import React from "react";

import {connect} from "react-redux"
import {loadBlogPost} from "../reducers/StoreAndReducers"

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        //converting the blogpost's date to a human readable format
        this.date = new Date(props.blogPost.date).toDateString();
    }

    componentDidMount() {
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
            <section id="singleBlogPost">
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
                                <div>{this.date}</div> <div className="">Share on <span className="socialButtons"/></div>
                            </div>
                        </div>
                    </div>
                    <hr className="headerSep"/>
                    <div className="row postBody">
                        <div className="col-sm-12">{this.props.blogPost.precontent}</div>
                        <div className="col-sm-12">{this.props.blogPost.text}</div>
                    </div>
                    <hr className="footerSep"/>
                    <div className="postFooter row">
                        <div className="col-sm-12">
                            <span className="postTagsIcon glyphicon glyphicon-tags"/><span>{this.props.blogPost.tags}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        blogPost: state.BlogPost
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
