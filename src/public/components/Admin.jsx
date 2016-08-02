import React from "react";
const func = (e)=>{
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

const submit= (e)=>{
    var self

    e.preventDefault()
    self = this

    console.log(this.state);

    var data = {
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment
    }

    // Submit form via jQuery/AJAX
    $.ajax({
        type: 'POST',
        url: '/adminfaszpinafaszfaszhitlerPOLPOT',
        data: data
    })
        .done(function(data) {
            self.clearForm()
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });

}
//TODO:remove brs...
const Admin = ()=>{
    return(
        <div>
                <form id="idForm" onSubmit={submit}>
                    <input type="text" placeholder="User" name="user"/>
                    <br/>
                    <input type="password" placeholder="Password" name="password"/>
                    <br/>
                    <button type="button" onClick={func}>Submitbtn</button>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
        </div>

)};
export default Admin