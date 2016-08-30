import React from "react";
import {connect} from "react-redux";
import {setActiveMember} from "../reducers/StoreAndReducers";

const TeamMember = (props) => {
    return (
        <div className="col-sm-4 projectCol">
            <a onClick={() => teamMemberOnClick(props)}>
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
    if (props.targetCollapse == props.activeMember) {
        $(`#${props.targetCollapse}`).hide({easing: "swing"});
        props.dispatch(setActiveMember(null));
    } else if (props.activeMember == null) {
        $(`#${props.targetCollapse}`).show({easing: "swing"});
        props.dispatch(setActiveMember(props.targetCollapse));
    } else {
        $(`#${props.activeMember}`).toggle({complete: ()=>{
            $(`#${props.targetCollapse}`).toggle({easing: "swing"});
        }});
        props.dispatch(setActiveMember(props.targetCollapse));
    }
};

export default connect(state => ({activeMember: state.activeMember}))(TeamMember);