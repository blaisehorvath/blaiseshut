import React from "react";

export default class AdminLoggedIn extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
    };
    render() {
        return (
            <div className="row">
                <div className="col-xs-8">
                    <h1>PlanktonWe-e-eed</h1>
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
                    <h1></h1>
                </div>
            </div>
        )
    };
}
export default AdminLoggedIn