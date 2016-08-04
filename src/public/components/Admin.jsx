import React from "react";


//TODO:remove brs...
export default class Admin extends React.Component {

    constructor(props){
        super(props);
        //asdasd.bind(this);
        console.log(this)
    };

    asdasd(e) {
        e.preventDefault();
        let data =
        {
            password: this.password.value,
            user: this.user.value
        };

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: '/adminlogged',
            data,
            success:function(data){
                if("name" in data && "hash" in data){
                    document.cookie="name="+data.name;
                    document.cookie="hash="+data.hash;
                }else if ("errormsg" in data) console.log(data.errormsg);
                }
        })
    }

    render() {
        return (
            <div>
                <form id="idForm">
                    <input ref={(ref)=>this.user = ref}type="text" placeholder="User" name="user"/>
                    <br/>
                    <input ref={(ref)=>this.password = ref} type="password" placeholder="Password" name="password"/>
                    <br/>
                    <input id="fasz" type="button" value="This has a binded function"
                           onClick={this.asdasd.bind(this)}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
};
export default Admin