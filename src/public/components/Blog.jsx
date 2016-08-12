import React from "react";
import {addBlogPosts} from "../reducers/StoreAndReducers"
import {connect} from 'react-redux'
// TODO:This code is duplicated from AdminLoggedIn....
const mapStateToProps = (state, ownProps) => {
    return {
        Tags: state.Tags
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};
const Tag = ({tag, addTagToField})=> {
    return (
        <a onClick={()=> {
            addTagToField(tag.name)
        }}>{tag.name + " "}</a>
    )
}
const TagList = ({Tags, addTagToField})=> {
    return (
        <div>
            {Tags.map((tag)=> {
                return <Tag key={tag.id} tag={tag} addTagToField={addTagToField}/>
            })}
        </div>
    );
};
const TagListWithStore = connect(mapStateToProps, mapDispatchToProps)(TagList)
// TODO:This code is duplicated from AdminLoggedIn....

const BlogPost = ({post,loggedIn})=> {
    console.log(loggedIn?1:0)
    return <div className="panel panel-default">
        <div className="panel-heading">
            <div className="row">
                <div className="col-xs-8">Post by {post.user} <br/>{post.title}</div>
                <div className="col-xs-4">Creted at {post.date}</div>
            </div>
        </div>
        <div className="panel-body">{post.text}</div>
        <div className="panel-footer">{post.tags.toString() + "   " +
        loggedIn?<a method="get" href={"/blog/"+encodeURIComponent(post.title)}>read more!</a>:""}</div>
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
        console.log(this)
        if(this.props.posts)
        return (<div>{this.props.posts.map(
            post=> {
                return <div key={post.id}>
                    <BlogPost post={post} loggedIn={this.props.loggedIn}/> //TODO:This is not the BLOG! loggedIn is elsewhere
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
//TODO:remove brs...
export
default
class Blog extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
    };

    render() {// TODO: Better styling
        return (
            <div className="row">
                <div className="col-xs-8">
                    <BlogPostsWithAjax/>
                </div>
                <div className="col-xs-4">
                    <TagListWithStore/>
                </div>
            </div>

        )
    }
}
;
export default Blog