import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About"

import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import React, { PropTypes } from 'react'
/*
 * This is only for testing purposes
 * */
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
const addImgNum = (imgNum) => {
    return {
        type: "IMG_SELECT",
        imgNum
    }
};
const mapStateToProps_fasz = (state, ownProps) => {
    return {};
}
const mapDispatchToProps_fasz = (dispatch, ownProps) => {
    return {
        onBtnClick: (text) => {
            dispatch(addImgNum(text));
        }
    };
};
const mapStateToProps_textbox = (state, ownProps) => {
    return {
        textField: state.aboutImgSelectorState//"ANYÁD PICSÁJA" //state.aboutImgSelectorState
    }
}
const mapDispatchToProps_textbox = (dispatch, ownProps) => {
    return {}
}
const TextBox = ({textField,children}) => {
    return (<div>
            <p>{textField}</p>
            <p>{children}</p>
        </div>
    )
};
const TextBoxfromIMGstate = connect(mapStateToProps_textbox, mapDispatchToProps_textbox)(TextBox)

const Pina = ({onBtnClick,children, faszalgas}) => {
    let input;
    return (
        <div>
            <input ref={node => {input = node;}}/>
            <button onClick={e =>{
                e.preventDefault();
                onBtnClick(input.value);}}>
                Add number
            </button>
            {children}
            {faszalgas}
        </div>)
};
const Fasz = connect(mapStateToProps_fasz, mapDispatchToProps_fasz)(Pina);

// ***************************IMAGEHOLDER
const ImageHolder = ({imageSrc,projectsWithImages}) => {
    return (
        <img src={imageSrc} className="img-rounded" alt="Cinque Terre" width="304"
             height="236"/>
    )
};
const mapStateToProps_ProjectImage = (state, ownProps) => {
    return {
        imageSrc: ownProps.projectsWithImages[state.aboutImgSelectorState].picture//"ANYÁD PICSÁJA" //state.aboutImgSelectorState
    }
}
const mapDispatchToProps_ProjectImage = (dispatch, ownProps) => {
    return {}
}
const ProjectsImage = connect(mapStateToProps_ProjectImage, mapDispatchToProps_ProjectImage)(ImageHolder);
// ***************************END OF IMAGEHOLDER
const ListItem = ({id,title,short_descr,onProjectClick}) => {
    return (
        <div className="list-group" id={id} onClick={()=>onProjectClick(id)}>
            <a href="#" className="list-group-item active">
                <h4 className="list-group-item-heading">{title}</h4>
                <p className="list-group-item-text">{short_descr}</p>
            </a>
        </div>
    )
}
const mapStateToProps_Project = (state,ownProps)=>{return {}}
const mapDispatchToProps_Project = (dispatch, ownProps)=>{    return {
    onProjectClick: (id) => {
        dispatch(addImgNum(id));
    }}}

const Project = connect (mapStateToProps_Project,mapDispatchToProps_Project )(ListItem)
const ListOfProjects = ({projectsWithImages, onProjectClick}) => {
    return (
        <ul>
            {projectsWithImages.map(project=><Project
                key={project.id}
                {...project}
            />)}
        </ul>
    )
}

const FelsoKepesLinkesResz = ({projectsWithImages}) => {
    console.log(projectsWithImages)
    return (
        <div className="row">
            <div className="col-xs-3">
                <ListOfProjects projectsWithImages={projectsWithImages}/>
            </div>
            <div className="col-xs-9">
                <ProjectsImage projectsWithImages={projectsWithImages}></ProjectsImage>
            </div>
        </div>
    );
}


const ReactApp = () =>
/***
 * This is function is the entry point of the react app. Each page will be a state of this React app.
 * @returns {XML}
 */
    (
        <div id="reactApp">
            <Nav/>
            <FelsoKepesLinkesResz projectsWithImages={options.aboutProjects}></FelsoKepesLinkesResz>
            <Fasz faszalgas="EzAfaszalgas">FASwwsssswZ </Fasz>
            <TextBoxfromIMGstate>faszbéci</TextBoxfromIMGstate>
            <Footer/>
        </div>
    )

export default ReactApp