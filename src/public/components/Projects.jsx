import React from "react";
import EmbeddedModal from "./EmbeddedModal"

const Projects = () => {
    return (
        <section id="projects">
                <div className="container">
                    <h1>Projects</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <a href="#embeddedModal" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="https://placehold.it/200x200" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="https://placehold.it/200x200" className="img-responsive" alt=""/>
                            </a>

                        </div>
                        <div className="col-sm-4">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="https://placehold.it/200x200" className="img-responsive" alt=""/>
                            </a>

                        </div>
                    </div>
                </div>

            <EmbeddedModal/>

            </section>
    )
};

export default Projects;