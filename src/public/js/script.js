/**
 * This sript will is the entry point for the app in the browser
 */
import ReactApp from "../components/ReactApp";
import React from "react";
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers,createStore } from 'redux';
//import {AppReducer} from "../reducers/StoreAndReducers"

const aboutImgSelectorState = (state = 0, action)=>{
    console.log(action);
    switch (action.type){
        case 'IMG_SELECT':
            return action.imgNum;
        default:
            return state;
    }
};
const AppReducer = combineReducers({
    aboutImgSelectorState
});
console.log(window.__INITIAL_STATE__);
let store = createStore(AppReducer,window.__INITIAL_STATE__);

console.log("Entry script is running!");

render(
    <Provider store={store}>
      <ReactApp/>
     </Provider>,
    document.getElementById('app')
);