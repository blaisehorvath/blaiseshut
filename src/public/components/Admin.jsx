import React from "react";


//TODO:remove brs...
export default class Admin extends React.Component {

    constructor(props) {
        super(props);
    };

    AdminLoginAjax(e) {
        console.log(this);
        e.preventDefault();
        let data =
        {
            password: this.password.value,
            user: this.user.value
        };

        // Submit form via jQuery/AJAX
        $.ajax({//outer this cannot be accessed from success function of .ajax
            type: 'POST',
            url: '/adminlogged',
            data,
        }).done((data)=>{
            if ("name" in data && "hash" in data) {
                document.cookie = "name=" + data.name;
                document.cookie = "hash=" + data.hash;
                location.reload();
            } else if ("errormsg" in data) {this.errormsg.innerHTML=data.errormsg}//this.errormsg.value = data.errormsg;

        })
    }

    render() {// TODO: Better styling
        return (
            <div>
                <input ref={(ref)=>this.user = ref} type="text" placeholder="User" name="user"/>
                <br/>
                <input ref={(ref)=>this.password = ref} type="password" placeholder="Password" name="password"/>
                <br/>
                <h5 ref={(ref)=>this.errormsg = ref} type="text" placeholder=" " name="errormsg"></h5>
                <br/>

                <input id="fasz" type="button" value="LogIn"
                       onClick={this.AdminLoginAjax.bind(this)}/>

            </div>

        )
    }
};
export default Admin