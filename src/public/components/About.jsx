import React from "react";
import ProjectImage from "../containers/ProjectImage"
import ProjectListItem from "../containers/ProjectListItem"
import MemberWithImage from"../containers/MemberWithImage"

let team =
    [
        {
            id: 0,
            name: "Team",
            img: "https://pbs.twimg.com/profile_images/1732538128/Fotolia_2976920_XS.jpg"
        },
        {
            id: 1,
            name: "Balazs",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsl0jS3eHn95JzbgWU1_G18Bx1qNHqy0w6BIePQZsuoMXhcus"

        }
        ,
        {
            id: 2,
            name: "Viktor",
            img: "http://static.theglobeandmail.ca/5e1/migration_catalog/article4071753.ece/ALTERNATES/w620/tech+geek+-+iStock+-+1500x844"
        }
    ];

let options = {
    aboutProjects: [
        {
            id: 0,
            title: "CNC",
            picture: "http://www.finmech.hu/wp-content/uploads/2015/08/Close-up-of-CNC-machine-at-work.jpg",
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
        <ul>
            {projectsWithImages.map(project=>
                <ProjectListItem
                    key={project.id}
                    {...project}
                />)}
        </ul>
    )
};
const TeamAndMembers = ({team, bootstrapWidth}) => {
    return (
        <div className="row">
            {team.map(member=>
                <div key={member.id} className={bootstrapWidth}>
                    <MemberWithImage id={member.id} title={member.name} imagesrc={member.img}></MemberWithImage>
                </div>)}
        </div>
    );
};
const TeamDescription = (team) => {
    return (
        <p>"ájjjááüóó</p>
    );
};

const FelsoKepesLinkesResz = ({projectsWithImages}) => {
    return (
        <div className="row">
            <div className="col-xs-6">
                <ListOfProjects projectsWithImages={projectsWithImages}/>
            </div>
            <div className="col-xs-6">
                <ProjectImage projectsWithImages={projectsWithImages}></ProjectImage>
            </div>
        </div>
    );
};
const AboutLowerTeamPart = () => {
    return (
        <div className="row">
            <TeamAndMembers team={team} bootstrapWidth="col-xs-4"></TeamAndMembers>
            <TeamDescription team={team}></TeamDescription>
        </div>
    );
};
const About = ()=>{
    return(
        <div>
        <FelsoKepesLinkesResz projectsWithImages={options.aboutProjects}></FelsoKepesLinkesResz>
        <AboutLowerTeamPart></AboutLowerTeamPart>
            <div className="input-group">
                <div className="input-group-btn">
                    <button aria-label="Bold" className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-bold"/>
                    </button>
                    <button aria-label="Italic" className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-italic"/>
                    </button>
                </div>
                <input type="text" aria-label="Text input with multiple buttons" className="form-control"/>
            </div>
        </div>
)};
export default About