import React from "react"
import {connect} from 'react-redux'
import {addActiveTags,addTag} from '../reducers/StoreAndReducers'
const mapStateToProps = (state)=> {
    return {
        blogPost: state.BlogPost,
        tags:state.Tags,
        activeTags: state.ActiveTags.map(tag=>tag.name).reduce((prev,curr)=>prev+" "+curr,"")
    }
};
class PostEditor extends React.Component {
    componentDidMount() {
        console.log(this)
        if (!$.isEmptyObject(this.props.blogPost)) {
            this.title.defaultValue = this.props.blogPost.title;
            this.precontent.defaultValue = this.props.blogPost.precontent;
            this.text.defaultValue = this.props.blogPost.text;
            this.id.value = this.props.blogPost.id;
            this.date.value = this.props.blogPost.date;
            this.user.value = this.props.blogPost.user;
            //this.tagEditor.defaultValue = this.props.blogPost.tags;
        }
    }

    render() {// TODO: Dispatch active Tags....
        return (
            <div>
                <form method="post" action="/newblogpost">
                    <textarea ref={(ref)=>this.title = ref} className="form-control" name="title" rows="1"
                              placeholder="title"></textarea>
                    <br/><br/>
                    <textarea ref={(ref)=>this.precontent = ref} className="form-control" name="precontent" rows="6"
                              placeholder="precontent"></textarea>
                    <br/><br/>
                    <textarea ref={(ref)=>this.text = ref} className="form-control" name="text" rows="15"
                              placeholder="blogpost"></textarea>
                    <br/><br/>
                    <input type="button" value="Add tag" onClick={()=>
                    {this.props.dispatch(addTag({id:this.props.tags.reduce((prev,curr)=>curr.id>prev?curr.id:prev,0)+1,name:this.newtag.value, relevance:0}))}}/>
                    <textarea className="form-control" rows="1" ref={(ref)=>this.newtag = ref} placeholder="Add new tag here"></textarea>
                    <br/>
                    <textarea ref={ref=>this.tagList = ref} value={this.props.activeTags} className="form-control" name="tags" rows="3"
                              placeholder="tags"></textarea>
                    <br/>
                    <textarea name="id" disabled className="form-control" rows="1" ref={(ref)=>this.id = ref}></textarea>
                    <textarea name="date" disabled className="form-control" rows="1" ref={(ref)=>this.date = ref}></textarea>
                    <textarea name='user' className="form-control" rows="1" ref={(ref)=>this.user = ref}></textarea>
                    <br/>
                    <input type="submit" value="Post"/>
                </form>
                <form method="post" action="/logout">
                    <input type="submit" value="Logout"/>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps)(PostEditor)