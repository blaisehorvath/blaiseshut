import React from "react";
import {addBlogPosts} from "../reducers/StoreAndReducers"
import {connect} from 'react-redux'

const BlogPost = ({post})=> {

    return <div className="panel panel-default">
        <div className="panel-heading">
            <div className="row">
                <div className="col-xs-8">Post by {post.user}</div>
                <div className="col-xs-4">Creted at {post.date}</div>
            </div>
        </div>
        <div className="panel-body">{post.text}</div>
        <div className="panel-footer">{post.tags}</div>
    </div>
}
class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        //TODO:Window.scrool check here
    }

    componentDidMount() {
        this.getNewBlogPosts(2);
    }

    getNewBlogPosts(numOfNewPosts) {
        TODO://Maybe this could be a little bit earlier?
            let data = {
                lastBlogPost: this.props.lastBlogPost,
                queryBlogNum: numOfNewPosts
            }
        $.ajax({//outer this cannot be accessed from success function of .ajax
            type: 'POST',
            url: '/getBlogPosts',
            data,
        }).done((data)=> {
            this.props.onAjaxFinish(data.Items) // Comes from the connect..
        })
    }

    render() {
        if(this.props.posts)
        return (<div>{this.props.posts.map(
            post=> {
                return <div key={post.id}>
                    <BlogPost post={post}/>
                </div>
            })}<div onClick={()=>{this.getNewBlogPosts(1)}} className="panel">Show me more!!</div></div>)//TODO: FRONT-END! Change this to scroll event
        else return <div></div>
    }

}


const
    mapStateToPropsBlogPosts = (state)=> {
        return {
            posts: state.BlogPosts.posts,
            lastBlogPost: state.BlogPosts.lastBlogPost
        }
    }
const
    mapDispatchToPropsBlogPosts = (dispatch)=> {
        return {
            onAjaxFinish: (posts)=> {
                dispatch(addBlogPosts(posts))
            }
        }
    }
const
    BlogPostsWithAjax = connect(mapStateToPropsBlogPosts, mapDispatchToPropsBlogPosts)(BlogPosts)
const
    TagBox = ()=> {
        return <div>TagBox</div>
    }
//TODO:remove brs...
export
default
class Blog extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {// TODO: Better styling
        return (
            <div className="row">
                <div className="col-xs-8">
                    <BlogPostsWithAjax/>
                </div>
                <div className="col-xs-4">
                    <TagBox/>
                </div>
            </div>

        )
    }
}
;
export default Blog