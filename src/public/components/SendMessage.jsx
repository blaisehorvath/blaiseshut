import React from "react";
import {connect} from "react-redux";
import {messageSuccess, messageFail, clearMessage} from "../actions/actions";

//TODO: separate The contacts section from About to a independent jsx file
//TODO: send the message to the server via ajax
//TODO: if the message has arrived  to the server alert the user that his/her message has been received

class SendMessage extends React.Component {
    //TODO: doc
    postMessage(event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/getMessage',
            data: {email: this.email.value, message: this.message.value},
            success: (data, statusCode) => { this.props.dispatch(messageSuccess())},
            error: ($xhr, statusCode, errorString) => { this.props.dispatch(messageFail())}
        })
    }

    //TODO: doc
    dispatchClear() {
        this.props.dispatch(clearMessage())
    }

    //TODO: doc
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

export default connect(state=>({messageStatus: state.messageStatus}))(SendMessage);


const DangerAlert = ({close}) => {
    return (
        <div id="dangerAlert" className="messageAlert alert alert-danger">
            <a href="#" className="close" onClick={(event) => {event.preventDefault(); close()}}>&times;</a>
            <strong>Danger!</strong> Error while sending message, please try again.
        </div>
    );
};

const SuccessAlert = ({close}) => {
    return (
        <div id="successAlert" className="messageAlert alert alert-success">
            <a href="#" className="close" onClick={(event) => {event.preventDefault(); close()}}>&times;</a>
            <strong>Success!</strong> Message successfully sent.
        </div>
    );
};

