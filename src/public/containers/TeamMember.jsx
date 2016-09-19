import React from "react";
import {connect} from "react-redux";
import {setActiveMember} from "../reducers/StoreAndReducers";
import BiStateImg from "../containers/BiStateImg";

/**
 * This stateless functional React component is responsible for the team member items.
 * @param props
 * @param props.caption {string} The text displayed under the member menu item.
 * @param props.activeMember {string} The id of the currently active member mapped from the state.
 * @param props.targetCollapse {string} The id (without #) of the collapse that contains the team members CV.
 * @returns {XML}
 * @constructor
 */
const TeamMember = (props) => {
    return (
        <div className="col-sm-4 memberCol">
            <a onClick={() => teamMemberOnClick(props)}>
                <div className="memberThumbnail">
                    <BiStateImg smallImgSrc="https://placehold.it/200x200" bigImgSrc="https://placehold.it/325x325"/>
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

/**
 * A function that is mapped to each Team Member. This function is responsible for the
 * jQuery animations that display the CV of the clicked team member. This function also notices the store about
 * which team member is active.
 * @param props
 * @param props.activeMember {string} The id of the currently active member mapped from the state.
 * @param props.targetCollapse {string} The id (without #) of the collapse that contains the team members CV.
 */
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