import React from "react"
export default class PostEditor extends React.Component {
    render() {
        return (
            <div>
                <form method="post" action="/newblogpost">
                    <textarea className="form-control" name="title" rows="1" placeholder="title"></textarea>
                    <br/><br/>
                    <textarea className="form-control" name="precontent" rows="6" placeholder="precontent"></textarea>
                    <br/><br/>
                    <textarea className="form-control" name="text" rows="15" placeholder="blogpost"></textarea>
                    <br/><br/>
                    <textarea ref={(ref)=>this.tagEditor = ref} className="form-control" name="tags" rows="3"
                              placeholder="tags"></textarea>
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