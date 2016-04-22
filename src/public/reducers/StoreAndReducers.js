/**
 * Created by v on 2016.04.22..
 */
import { combineReducers/*,createStore*/ } from 'redux';
const aboutImgSelectorState = (state = 0, action)=>{
    switch (action.type){
        case 'IMG_SELECT':
            return action.imgNum;
        default:
            return state;
    }
};
export const AppReducer = combineReducers({
    aboutImgSelectorState
});
//let store = createStore(AppReducer);  0