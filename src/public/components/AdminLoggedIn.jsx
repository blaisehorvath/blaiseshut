import React from "react";

const AdminLoggedIn = ()=>{
    return(
        <div>
            <h1>PlanktonWe-e-eed</h1>
            <form method="post" action="/newblogpost">
                <textarea name="text" cols="100" rows="15" value="Add multiple lines of text here and watch the scrollbars grow..."></textarea>
                <br/>
                <input type="submit" value="Post"/>
            </form>
            <form method="post" action="/logout">
                <input type="submit" value="Logout"/>
            </form>
        </div>
)};
export default AdminLoggedIn