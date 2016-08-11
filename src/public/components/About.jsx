import React from "react";
import ProjectImage from "../containers/ProjectImage"
import ProjectListItem from "../containers/ProjectListItem"
import MemberWithImage from"../containers/MemberWithImage"
import ProjectList from "./ProjectList";

let team =
    [
        {
            id: 0,
            name: "Team",
            img: "https://placehold.it/250x140"
        },
        {
            id: 1,
            name: "Balazs",
            img: "https://placehold.it/250x140"

        }
        ,
        {
            id: 2,
            name: "Viktor",
            img: "https://placehold.it/250x140"
        }
    ];

let options = {
    aboutProjects: [
        {
            id: 0,
            title: "CNC",
            picture: "http://placehold.it/470x250",
            short_descr: "Nagyon durva bááázee"
        },
        {
            id: 1,
            title: "MIDI synth",
            picture: "http://www.elektricks.net/wp-content/uploads/2015/02/STM32F4-Discovery.jpg",
            short_descr: "Nagyon durva bááázee"
        },
        {
            id: 2,
            title: "Mesh network with RIOT os",
            picture: "http://midisizer.files.wordpress.com/2013/01/midibud_bbf-small1.jpg",
            short_descr: "Nagyon durva bááázee"
        }
    ],
    articles: [
        {
            id: 0,
            title: "This is the first article",
            body: "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. <p> VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami. </p>",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id: 1,
            title: "This is the first article",
            body: "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id: 2,
            title: "This is the first article",
            body: "VHS flannel cray ea, fashion axe four loko officia nisi gentrify chillwave. Ea chillwave sustainable dolore nihil cronut, celiac disrupt. Celiac cornhole ut organic. Offal vinyl seitan, heirloom ad marfa eiusmod tempor. Placeat before they sold out roof party affogato, listicle minim nostrud slow-carb twee aesthetic schlitz bespoke bicycle rights. In crucifix ad, bespoke 3 wolf moon fugiat id messenger bag eiusmod gochujang knausgaard quis next level qui. Tacos blue bottle viral, swag mixtape occupy twee meh williamsburg labore umami.",
            tags: ["hipster", "ipsum", "cats"]
        },
        {
            id: 3,
            title: "Yellow umbrella",
            body: '<img class="img-responsive" src="https://41.media.tumblr.com/875799f7d42336377a1931e04df15f21/tumblr_npr9pzmNhq1qmv09yo1_500.png" />',
            tags: ["image"]
        }
    ]
};

const ListOfProjects = ({projectsWithImages, onProjectClick}) => {
    return (
        <div className="list-group">
            {projectsWithImages.map(project=>
                <ProjectListItem
                    key={project.id}
                    {...project}
                />)}
        </div>
    )
};
const TeamAndMembers = ({team}) => {
    return (
        <div className="row teamRow">
            {team.map(member=>
                <div key={member.id} className="col-xs-4 memberBox">
                    <MemberWithImage id={member.id} title={member.name} imagesrc={member.img}/>
                </div>)}
        </div>
    );
};
const TeamDescription = (team) => {
    return (
        <div className="row">
            <p>Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla.Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla. Victrixs assimilant, tanquam germanus nutrix. Indictios experimentum, tanquam pius bulla.</p>
        </div>
    );
};

const ProjectImageSelector = ({projectsWithImages}) => {
    return (
        <div className="row projectImageSelector">
            <div className="col-xs-12 col-sm-6 projectImageDescriptionList">
                <ListOfProjects projectsWithImages={projectsWithImages}/>
            </div>
            <div className="hidden-xs col-sm-6 projectImage">
                <ProjectImage projectsWithImages={projectsWithImages}></ProjectImage>
            </div>
        </div>
    );
};

const About = ()=>{
    return(
        <div>
            <ProjectImageSelector projectsWithImages={options.aboutProjects}/>
            <TeamAndMembers team={team}/>
            <TeamDescription team={team}/>
            <h1>UJ ProjectList</h1>
            <ProjectList/>
        </div>
)};
export default About