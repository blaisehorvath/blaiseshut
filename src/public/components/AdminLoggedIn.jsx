import React from "react";

export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.getTagsAjax = this.getTagsAjax.bind(this)
    };
    componentDidMount(){
        this.getTagsAjax()
    }
    getTagsAjax(){
        $.ajax({type:"POST",url:"/getTags"}).done((data)=>{
            if("tags" in data){this.tags.value=data.tags}
            else if ("errormsg" in data){console.log(data.errormsg)}
        })}

    render() {
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
                <div className="col-xs-4">
                    <textarea readOnly="true" className="form-control" rows="15" ref={(ref)=>this.tags = ref}></textarea>
                </div>
            </div>
        )
    };
}
//
export default AdminLoggedIn