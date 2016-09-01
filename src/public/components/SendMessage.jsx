import React from "react";

//TODO: separate The contacts section from About to a independent jsx file
//TODO: send the message to the server via ajax
//TODO: if the message has arrived  to the server alert the user that his/her message has been received
const SendMessage = (props) => {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter yout email address..."/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">Message:</label>
                <div className="col-sm-10">
                    <textarea id="comment" cols="30" rows="10" placeholder="Enter your message..." className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </div>
        </form>
    )
};

export default SendMessage;
