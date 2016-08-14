import React from "react"
export default class SinglePostWithoutStore extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
        if(this.props.blogTitle) {// If we are coming from blog or somewhere else from this site on front end
            $.ajax({// This could be sooo much better without this
                type: 'POST',
                url: this.props.blogTitle.path
            }).done((blogPost)=> {
                console.log(blogPost)
                this.props.onAjaxBlogPost(blogPost); // Comes from the connect..
            })
        }
    }
    render() {
        return <div> <br/><br/><br/>
            <div>{this.props.blogPost.title}</div>
            <div>{this.props.blogPost.user}</div>
            <div>{this.props.blogPost.date}</div>
            <div>{this.props.blogPost.precontent}</div>
            <div>{this.props.blogPost.text}</div>
            <div>{this.props.blogPost.tags}</div>
        </div>
    }
}