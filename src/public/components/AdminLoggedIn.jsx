import React from "react";

const AdminLoggedIn = ()=>{
    return(
        <div>
            <br/><br/><br/>
            <h1>PlanktonWe-e-eed</h1>
            <form method="post" action="/logout">
                <input type="submit" value="Logout"/>
            </form>
        </div>
)};
export default AdminLoggedIn