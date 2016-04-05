import React from "react";

export default class AboutOption extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick () {
        $()
    }

    render () {
        return (
            <div className="list-group" id={aboutProject.id}>
                <a href="#" className="list-group-item active">
                    <h4 className="list-group-item-heading">{aboutProject.title}</h4>
                    <p className="list-group-item-text">{aboutProject.short_descr}</p>
                </a>
            </div>
        );
    };
}