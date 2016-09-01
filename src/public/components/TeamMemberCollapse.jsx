import React from 'react';
import TeamMember from '../containers/TeamMember';

/**
 * This stateless functional React component is responsible for displaying the team members and for each a Bootstrap collapse.
 * @param props
 * @param props.teamMembers {Array} An array of settings for each TeamMember component.
 * @returns {XML}
 * @constructor
 */
const TeamMemberCollapse = (props) => {
    let memberAnchors = props.teamMembers.map(member => <TeamMember key={member.targetCollapse} {...member}/>);
    let memberCollapses = props.teamMembers.map(member => <TeamCollapse key={member.targetCollapse} title={member.title} collapseId={member.targetCollapse} children={member.children}/>);
    return (
        <div>
            <div className="teamButtons row">
                {memberAnchors}
            </div>
            { memberCollapses }
        </div>
    );
};

export default TeamMemberCollapse;

/**
 * A stateless functional React component that renders a Bootstrap collapse component.
 * @param props
 * @param props.collapseId {string} The id of the collapse
 * @param props.title {string} The title displayed in the Bootstrap collapse.
 * @param props.children {string} The chuldren DOM elements that will be the content of the TeamCollapse.
 * @returns {XML}
 * @constructor
 */
const TeamCollapse = (props) => {
    return (
        <div className="collapse teamCollapse" id={props.collapseId}>
            <div className="well">
                <h1>{props.title}</h1>
                <div className="teamCollapseChildren">{ props.children }</div>
            </div>
        </div>
    );
};

