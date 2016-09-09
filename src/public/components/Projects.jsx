import React from "react";
import EmbeddedModal from "./EmbeddedModal";
import IOTModal from "./IOTModal";
import WebAppModal from "./WebAppModal";

//TODO: WHEN FINISHED MOVE THIS TO PROPS
const projectList = [
    {
        targetID: "webAppModal",
        caption: "WEB application development",
        imgId: "webAppListImg",
    },
    {
        targetID: "embeddedModal",
        caption: "Embedded systems design",
        imgId: "embeddedListImg",
    },
    {
        targetID: "iotModal",
        caption: "IOT engineering",
        imgId: "iotListImg",
    }
];

/**
 * A stateless functionar React component that returns the Projects section.
 * @param propsi {Array} Array of projects that will be rendered to the projects section
 * @returns {XML}
 * @constructor
 */
const Projects = (props) => {
    let projects = projectList.map(project => <Project key={project.targetID} {...project}/>);
    return (
        <section id="projects">
            <div className="container">
                <h1 className="headerTitle">Projects</h1>
                <div className="projectList">
                    <div className="row projectContainer">
                        {projects}
                    </div>
                </div>
            </div>
            <EmbeddedModal/>
            <IOTModal/>
            <WebAppModal/>
        </section>
    )
};

export default Projects;

/**
 * A stateless functional React component that holds a single project
 * @param props
 * @param props.targetID {string} This string will be the id for the anchor tag, that toggles the project's description.
 * @param props.imgId {string} The id of the image that will be displayed for the project //TODO: is this still valid after finalization?
 * @param props.caption {string} The caprion of the project that will be displayed under the project's image.
 * @returns {XML}
 * @constructor
 */
const Project = (props) => {
    return (
        <div className="col-sm-4 projectCol">
            <a href={"#" + props.targetID} data-toggle="modal">
                <div className="projectThumbnail">
                    <img id={props.imgId} className="img-responsive projectImage" alt=""/>
                    <div className="caption">
                        <div className="caption-content">
                            {props.caption}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
};