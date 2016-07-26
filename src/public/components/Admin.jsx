import React from "react";


//TODO:remove brs...
const Admin = ()=>{
    return(
        <div>
                <form method="post" action="/admin">
                    <input type="text" placeholder="User" name="user"/>
                    <br/>
                    <input type="password" placeholder="Password" name="password"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
        </div>
)};
export default Admin