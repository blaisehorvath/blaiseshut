import React from "react";

export default class AboutTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="row">
                <div className="col-xs-3">
                    {this.props.data}
                </div>

                <div className="col-xs-9">
                    <img src={this.props.aboutImgSelectorState} className="img-rounded" alt="Cinque Terre" width="304" height="236"/>
                </div>

            </div>
        );
    };
}