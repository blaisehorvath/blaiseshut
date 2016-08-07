/**
 * Created by v on 2016.04.22..
 */
import { combineReducers } from 'redux';
const aboutImgSelectorState = (state = 0, action)=>{
    switch (action.type){
        case 'IMG_SELECT':
            return action.imgNum;
        default:
            return state;
    }
};
const AboutTeamNumber = (state = 0, action) =>
{
    switch (action.type){
        case 'ABOUT_TEAM_NUMBER_CHANGE':
            return action.teamNum;
        default:
            return state;
    }
}
const Tags = (state = [], action) =>
{
    switch (action.type){
        case 'ADD_ALL_TAGS':
            return [...action.tags]//TOOD:Rewrite all exsisting tags
        case 'ADD_TAG':
            return [action.tag,...state]
        default:
            return state;
    }
}
export const setInitialTags = (tags)=>{
    return{
        type:'ADD_ALL_TAGS',
        tags
    }
}
export const addTag=(tag)=>{
    return{
        type:'ADD_TAG',
        tag
    }
}
let AppReducer = combineReducers({
    aboutImgSelectorState,
    AboutTeamNumber,
    Tags
});

export const addImgNum = (imgNum) => {
    return {
        type: "IMG_SELECT",
        imgNum
    }
};
export const changeAboutTeamNumber = (teamNum) =>{
    return {
        type: "ABOUT_TEAM_NUMBER_CHANGE",
        teamNum
    }
}
export default AppReducer;