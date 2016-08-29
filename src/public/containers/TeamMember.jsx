import React from "react";
import {connect} from "react-redux";
import {setActiveMember} from "../reducers/StoreAndReducers";

const TeamMember = (props) => {
    return (
        <div className="col-sm-4 projectCol">
            <a onClick={() => teamMemberOnClick(props)}
               href={"#" + props.targetCollapse}
               data-toggle="collapse"
               role="button"
               aria-expanded="false"
               aria-controls={props.targetCollapse}>

                <div className="projectThumbnail">
                    <img className="img-responsive teamPicture" alt=""/>
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

const teamMemberOnClick = (props) => {
    props.dispatch(setActiveMember(props.targetCollapse))
};

export default connect(state => ({activeMember: state.activeMember}))(TeamMember);