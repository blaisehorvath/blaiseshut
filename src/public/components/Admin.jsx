import React from "react";
const func = (e)=>{
    e.preventDefault(); // avoid to execute the actual submit of the form.
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
    const fasz = (e)=>{
        e.preventDefault();
        console.log("NAGY BÜDÖS PINA");
        window.alert("asdadsadadsadsa");
        alert("NAGY BÜDÖS PINA");
    };
    return(
        <div onClick={()=>alert("pina")}>
                <form id="idForm">
                    <input type="text" placeholder="User" name="user"/>
                    <br/>
                    <input type="password" placeholder="Password" name="password"/>
                    <br/>
                    <input id="fasz" type="button" value="This has a binded function" onClick={fasz}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
        </div>

)};
export default Admin