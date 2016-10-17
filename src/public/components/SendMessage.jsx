import React from "react";
import {connect} from "react-redux";
import {messageSuccess, messageFail, clearMessage} from "../actions/actions";

/**
 * This class is based on the Component class of React. This component renders a contact us form that can be used to send data to the server-
 * @class
 */
class SendMessage extends React.Component {

    /**
     * This function sends data to the server via AJAX and based on the result of the response dispatches an action.
     * @param event
     */
    postMessage(event) {
        event.preventDefault();
        let email = this.email.value;
        let message = this.message.value;
        this.email.value = this.message.value = "";
        $.ajax({
            type: 'POST',
            url: '/getMessage',
            data: {email: email, message: message},
            success: (data, statusCode) => { this.props.dispatch(messageSuccess())},
            error: ($xhr, statusCode, errorString) => { this.props.dispatch(messageFail())}
        })
    }

    /**
     * This function dispatches a clearMessage action. This function can be supplied to alert components.
     */
    dispatchClear() {
        this.props.dispatch(clearMessage())
    }

    /**
     * This function returns the proper alert component (or nothing) based on the store.
     * By default (when no message is sent) it returns null.
     * @returns {*}
     */
    returnAlert() {
        switch (this.props.messageStatus) {
            case "success":
                return <SuccessAlert close={this.dispatchClear.bind(this)}/>;
            case "fail":
                return <DangerAlert close={this.dispatchClear.bind(this)}/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input ref={(ref)=>this.email = ref} type="email" className="form-control" id="email"
                               placeholder="Enter yout email address..."/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">Message:</label>
                    <div className="col-sm-10">
                        <textarea ref={(ref)=>this.message = ref} id="comment" cols="30" rows="10"
                                  placeholder="Enter your message..." className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default contactSubmit" onClick={(event)=> {
                            this.postMessage(event)
                        }}>Send message
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-6">
                        {this.returnAlert()}
                    </div>
                </div>
            </form>
        );
    }
}

// get the messageStatus from the store
export default connect(state=>({messageStatus: state.messageStatus}))(SendMessage);

/**
 * This stateless functional react component returns a Bootstrap alert-danger component.
 * @param close {callback} A function that is called when the user clicks on the close anchor of the alert.
 * @returns {XML}
 * @constructor
 */
const DangerAlert = ({close}) => {
    return (
        <div id="dangerAlert" className="messageAlert alert alert-danger">
            <a href="#" className="close" onClick={(event) => {event.preventDefault(); close()}}>&times;</a>
            <strong>Danger!</strong> Error while sending message, please try again.
        </div>
    );
};

/**
 * This stateless functional react component returns a Bootstrap alert-danger component.
 * @param close {callback} A function that is called when the user clicks on the close anchor of the alert.
 * @returns {XML}
 * @constructor
 */
const SuccessAlert = ({close}) => {
    return (
        <div id="successAlert" className="messageAlert alert alert-success">
            <a href="#" className="close" onClick={(event) => {event.preventDefault(); close()}}>&times;</a>
            <strong>Success!</strong> Message successfully sent.
        </div>
    );
};
