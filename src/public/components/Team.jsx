import React from 'react';
import TeamMemberCollapse from '../components/TeamMemberCollapse';
import {viktorText,balazsText,teamText} from "../pages/Texts"
/**
 * This constant holds the configurations for Team section
 * @const
 * @type {Array}
 */
const teamMembers = [
    {
        targetCollapse: "teamCollapse",
        isExpanded: false,
        caption: "Team",
        title: "Team",
        children: teamText,
        smallImgSrc: "/img/team_200.jpg",
        bigImgSrc: "/img/team_325.jpg",
    },
    {
        targetCollapse: "member1",
        isExpanded: false,
        caption: "Balázs",
        title: "Balázs",
        children: balazsText,
        smallImgSrc: "/img/balazs_200.jpg",
        bigImgSrc: "/img/balazs_325.jpg",
    },
    {
        targetCollapse: "member2",
        isExpanded: false,
        caption: "Viktor",
        title: "Viktor",
        children: viktorText,
        smallImgSrc: "/img/mrengineer_200.jpg",
        bigImgSrc: "/img/mrengineer_325.jpg",
    }
];

/**
 * This stateless functional React component returns the Team section of the About page.
 * @returns {XML}
 * @constructor
 */
const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <h1 className="headerTitle">Team</h1>
                <TeamMemberCollapse teamMembers={teamMembers}/>
            </div>
        </section>
    );
};

export default Team;
