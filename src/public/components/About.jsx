import React from "react";
import AboutTop from "./AboutTop"

export default class About extends React.Component {
    /***
     * This React class will handle the main page.
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /***
     * This function renders the article to the DIV with the id articles. Watch out, only put safe saninitized html to the body of the article.
     * @returns {XML}
     */
    render () {
        let aboutProjects = this.props.data.aboutProjects.map(
            (aboutProject) => {
                "use strict";
                return (
                    <div className="list-group" id={aboutProject.id}>
                        <a href="#" className="list-group-item active">
                            <h4 className="list-group-item-heading">{aboutProject.title}</h4>
                            <p className="list-group-item-text">{aboutProject.short_descr}</p>
                        </a>
                    </div>
                )
            }
        );
        return (
            <div className="container">
                <AboutTop data={aboutProjects} aboutImgSelectorState={this.props.aboutImgSelectorState}/>
            </div>
        )
    }
};