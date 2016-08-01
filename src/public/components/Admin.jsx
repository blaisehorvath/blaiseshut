import React from "react";
const func = ()=>{
    console.log("ajaxing");
    $.ajax({
        type: "POST",
        url: "/adminfaszpinafaszfaszhitlerPOLPOT",
        data:"SOKFASZ",
        //data: $("#idForm").serialize(), // serializes the form's elements.
        success: function(data)
        {
            alert(data); // show response from the php script.
        }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form.
};

//TODO:remove brs...
const Admin = ()=>{
    return(
        <div>
                <form id="idForm" onsubmit={()=>{console.log("fasz")}}>
                    <input type="text" placeholder="User" name="user"/>
                    <br/>
                    <input type="password" placeholder="Password" name="password"/>
                    <br/>
                    <button type="button" onClick={func}>Submit</button>
                    <br/>
                    <input type="submit" value="Submit" onClick="console.log("fasz")"/>
                </form>
        </div>

)};
export default Admin