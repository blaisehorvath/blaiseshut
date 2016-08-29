import React from 'react';

const TeamMemberCollapse = (props) => {
    let memberAnchors = props.teamMembers.map(member => <TeamMember key={member.targetCollapse} {...member}/>);
    let memberCollapses = props.teamMembers.map(member => <TeamCollapse title={member.title} collapseId={member.targetCollapse} children={member.children}/>);
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

const TeamMember = (props) => {
    return (
        <div className="col-sm-4 projectCol">
            <a href={"#" + props.targetCollapse} data-toggle="collapse" role="button" aria-expanded="false"
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

