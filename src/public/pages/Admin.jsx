import React from "react";
import {connect} from 'react-redux'
import {loggedInTrue, loggedInFalse} from '../reducers/StoreAndReducers'
const mapStateToProps = (state, ownProps) => {
    return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        adminLoggedIn: ()=>dispatch(loggedInTrue())
    }
};

//TODO:remove brs...
class Admin extends React.Component {

    constructor(props) {
        super(props);
    };

    AdminLoginAjax(e) {
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
        }).done((data)=> {
            if ("name" in data && "hash" in data) {
                document.cookie = "name=" + data.name;
                document.cookie = "hash=" + data.hash;
                this.props.adminLoggedIn();
                location.reload();//TODO:This is quite unnecessary, but anyway... This could be in the store completely, but its ok like this too.
            } else if ("errormsg" in data) {
                this.errormsg.innerHTML = data.errormsg
            }

        })
    }

    render() {// TODO: Better styling
        return (
            <form>
                <br/><br/><br/><br/><br/>
                <input ref={(ref)=>this.user = ref} type="text" placeholder="User" name="user"/>
                <br/>
                <input ref={(ref)=>this.password = ref} type="password" placeholder="Password" name="password"/>
                <br/>
                <h5 ref={(ref)=>this.errormsg = ref} type="text" placeholder=" " name="errormsg"/>
                <br/>
                <input id="fasz" type="submit" value="LogIn"
                       onClick={this.AdminLoginAjax.bind(this)}/>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);