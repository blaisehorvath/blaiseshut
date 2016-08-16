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

const BlogPosts = (state = {lastBlogPost:0,posts:[]}, action)=>{//TODO: Get all blogposts in the right order (time added)
    switch (action.type){
        case 'NEW_BLOG_POSTS':
            let returnState = Object.assign({},state)
            returnState.lastBlogPost += action.posts.length;
            returnState.posts = returnState.posts.concat(action.posts);
            return returnState;
        default:
            return state;
    }
};
const LoggedIn = (state = false, action)=>{
    switch (action.type){
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};
const BlogPost =(state = {},action)=>{
    switch (action.type){
        case 'LOAD_POST':
            return action.blogPost;
        default:
            return state;
    }
};

const ActiveNavButtonId = (state = "home", action) => {
    switch (action.type) {
        case 'SET_ACTIVE_NAVBUTTON':
            console.log("recieved action", action);
            return action.id;
        default:
            return state;
    }
};

const ActiveTags = (state=[], action)=>{
    switch (action.type){
        case 'ADD_ACTIVE_TAG':
            return [action.tag,...state];
        case 'REMOVE_ACTIVE_TAG':
            return [...state].filter((tag)=>tag !== action.tag);
        case 'SWITCH_ACTIVE_TAG':
            if (state.indexOf(action.tag) > -1){
                return [...state].filter((tag)=> tag !== action.tag)
            }
            else
                return [action.tag,...state];
        default:
            return state;
    }
};

const ActiveBlogPosts = (state = [],action)=>{
    switch (action.type){
        default:
            return state;
    }
};

export const switchActiveTag =(tag) =>{
    return {
        type: 'SWITCH_ACTIVE_TAG',
        tag
    }
}

export const addActiveTag = (tag) => {
  return {
      type: 'ADD_ACTIVE_TAG',
      tag
  }
};
export const removeActiveTag = (tag)=>{
  return {
      type:'REMOVE_ACTIVE_TAG',
      tag
  }
};

export const setActiveNavButton = (id) => {
  return {
      type : "SET_ACTIVE_NAVBUTTON",
      id : id
  };
};

export const logout=()=>{
    return{
        type:'LOGOUT'
    }
};
export const login=()=>{
    return{
        type:'LOGIN'
    }
};
export const loadBlogPost = (blogPost) =>{
    return {
        type: "LOAD_POST",
        blogPost
    }
};
export const addBlogPosts = (posts) =>{
    return {
        type:'NEW_BLOG_POSTS',
        posts
    }
};
export const setInitialTags = (tags)=>{
    return{
        type:'ADD_ALL_TAGS',
        tags
    }
};
export const addTag=(tag)=>{
    return{
        type:'ADD_TAG',
        tag
    }
};
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
let AppReducer = combineReducers({
    aboutImgSelectorState,
    AboutTeamNumber,
    Tags,
    BlogPosts,
    LoggedIn,
    BlogPost,
    ActiveNavButtonId,
    ActiveTags,
    ActiveBlogPosts
});
export default AppReducer;