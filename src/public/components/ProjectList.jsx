import React from "react";
import ProjectListItem from "../containers/ProjectListItem"

let content = [
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
];

const ListItem = ({id,title,short_descr,onProjectClick,active}) => {
    return (
        <a href="#" className={active?"list-group-item active":"list-group-item"}>
            <h4 className="list-group-item-heading">{title}</h4>
            <p className="list-group-item-text">{short_descr}</p>
        </a>
    )
};

const ProjectList = () => {
   return (
       <div className="list-group">
        {content.map((project)=>{return <ListItem {...project}/>})}
       </div>
   )
};

export default ProjectList;