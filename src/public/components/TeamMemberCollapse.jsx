import React from 'react';
import TeamMember from '../containers/TeamMember';

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

