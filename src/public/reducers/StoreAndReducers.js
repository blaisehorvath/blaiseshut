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
let AppReducer = combineReducers({
    aboutImgSelectorState,
    AboutTeamNumber
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