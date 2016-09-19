import React from "react";
import EmbeddedModal from "./EmbeddedModal";
import IOTModal from "./IOTModal";
import WebAppModal from "./WebAppModal";
import Project from "./Project";

//TODO: WHEN FINISHED MOVE THIS TO PROPS
const projectList = [
    {
        targetID: "webAppModal",
        caption: "WEB application development",
        imgSrc: {small: "https://placehold.it/200x200", big: "https://placehold.it/325x325"},
    },
    {
        targetID: "embeddedModal",
        caption: "Embedded systems design",
        imgSrc: {small: "https://placehold.it/200x200", big: "https://placehold.it/325x325"},
    },
    {
        targetID: "iotModal",
        caption: "IOT engineering",
        imgSrc: {small: "https://placehold.it/200x200", big: "https://placehold.it/325x325"},
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

