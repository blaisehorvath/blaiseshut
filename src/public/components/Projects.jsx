import React from "react";
import EmbeddedModal from "./EmbeddedModal";
import IOTModal from "./IOTModal";
import WebAppModal from "./WebAppModal";

//TODO: WHEN FINISHED MOVE THIS TO PROPS
let projectList = [
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

const Projects = (props) => {
    let projects = projectList.map(project => <Project key={project.targetID} {...project}/>);
    return (
        <section id="projects">
            <div className="container">
                <h1>Projects</h1>
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