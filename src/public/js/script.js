/**
 * This sript will is the entry point for the app in the browser
 */

import ReactApp from "../components/ReactApp";
import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//FLUX SHIT
import { combineReducers,createStore } from 'redux';
import {connect} from "react-redux"

const aboutImgSelectorState = (state = 0, action)=>{
    console.log(action);
    switch (action.type){
        case 'IMG_SELECT':
            return action.ingNum;
        default:
            return state;
    }
};
const AppReducer = combineReducers({
    aboutImgSelectorState
});
console.log(window.__INITIAL_STATE__);
let store = createStore(AppReducer,window.__INITIAL_STATE__);

//END OF FLUX SHIT
/*let App = React.createElement(ReactApp,{
    title: "Stuff"
});*/

console.log("Entry script is running!");

render(
    <Provider store={store}>
      <ReactApp/>
     </Provider>,
    document.getElementById('app')
)

/*import Redux from "redux"
 const { combineReducers } = Redux;
 console.log(Redux);
 console.log("PINA");
 const { createStore } = Redux;
 const aboutImgSelectorState = (state = 0, action)=>{
 switch (action.type){
 case 'IMG_SELECT':
 if(state !== action.imgNum) this.state.data.aboutImgSelectorState = action.imgNum;
 return action.ingNum;
 default:
 return state;
 }
 };
 const AppReducer = combineReducers({
 aboutImgSelectorState
 });
 const store = createStore(AppReducer);*/