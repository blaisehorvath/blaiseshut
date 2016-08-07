import React from "react";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        Tags: state.Tags
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};
const Tag =(tag)=>{return(<a key={tag.id}>{tag.str+" "}</a>)}
const TagList = ({Tags})=> {
    console.log(Tags)
    return (<div>{Tags.map((tag)=>{return Tag(tag)})}</div>);
};
const TagListWithStore = connect(mapStateToProps, mapDispatchToProps)(TagList)

export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.getTagsAjax = this.getTagsAjax.bind(this)
    };
    componentDidMount() {
        //this.getTagsAjax()
    }
    getTagsAjax() {
        $.ajax({type: "POST", url: "/getTags"}).done((data)=> {
            if ("tags" in data) {
                this.createClickableTags()
            }
            else if ("errormsg" in data) {
                console.log(data.errormsg)
            }
        })
    }

    render() {//TODO:Use react components for everything!
        return (
            <div className="row">
                <div className="col-xs-8">
                    <form method="post" action="/newblogpost">
                        <textarea className="form-control" name="text" rows="15" placeholder="blogpost"></textarea>
                        <br/><br/>
                        <textarea className="form-control" name="tags" rows="3" placeholder="tags"></textarea>
                        <br/>
                        <input type="submit" value="Post"/>
                    </form>
                    <form method="post" action="/logout">
                        <input type="submit" value="Logout"/>
                    </form>
                </div>
                <TagListWithStore/>
            </div>
        );
    };
}
//
export default AdminLoggedIn