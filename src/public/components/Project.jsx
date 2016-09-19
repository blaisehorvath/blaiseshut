import React from "react";
import BiStateImg from "../containers/BiStateImg"

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
                    <BiStateImg smallImgSrc={props.imgSrc.small} bigImgSrc={props.imgSrc.big}/>
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

export default Project;
