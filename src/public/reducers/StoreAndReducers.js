/**
 * Created by v on 2016.04.22..
 */
import {combineReducers} from 'redux';

const Tags = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_TAGS':
            return [...action.tags]//TOOD:Rewrite all exsisting tags
        case 'ADD_TAG':
            return [...state, action.tag]
        default:
            return state;
    }
};

const BlogPosts = (state = [], action)=> {//TODO: Get all blogposts in the right order (time added)
    switch (action.type) {// TODO: JS SET??
        case 'NEW_BLOG_POSTS':
            return [...state].concat(action.posts)
            // This part is to ensure that no post is duplicated, not tested
            // .filter((post)=>
            //     !state.filter((statePost)=>statePost ===post)));
                .sort((a, b)=> { // descending order, TODO: maybe we could order things by date?
                    return a.id < b.id ? 1 : -1
                });
        default:
            return state;
    }
};
const BlogPost = (state = {}, action)=> {
    switch (action.type) {
        case 'LOAD_POST':
            return action.blogPost;
        default:
            return state;
    }
};
const LoggedIn = (state = false, action)=> {
    switch (action.type) {
        case 'LOGGED_IN_TRUE':
            return true;
        case 'LOGGED_IN_FALSE':
            return false;
        default:
            return state;
    }
};

const ActiveTags = (state = [], action)=> {
    switch (action.type) {
        case 'ADD_ACTIVE_TAG':
            return [action.tag, ...state];
        case 'REMOVE_ACTIVE_TAG':
            return [...state].filter((tag)=>tag !== action.tag);
        case 'ADD_ACTIVE_TAGS':
            return [...action.tags]
        case 'SWITCH_ACTIVE_TAG':
            if (state.indexOf(action.tag) > -1) {
                return [...state].filter((tag)=> tag !== action.tag)
            }
            else
                return [action.tag, ...state];
        default:
            return state;
    }
};


const ActiveBlogPosts = (state = [], action)=> {
    switch (action.type) {
        default:
            return state;
    }
};

/**
 * This reducer stores the current display width in the store.
 * It's first called with the width from the front-end script
 * when the DOM is ready and sets the display to the measured width.
 * @param state {string} ["sm"] The Bootstrap display width type name and an additional <i>mobile</i> or <i>wide</i>.
 * @param action {Object}
 * @param action.type {string} ["SET_DISPLAY_WIDTH"]
 * @param action.displayWidth {string} The Bootstrap display width type name and an additional <i>mobile</i> or <i>wide</i>.
 * @returns {string} The state of the displayWidth.
 */
const displayWidth = (state = "sm", action) => {
    switch (action.type) {
        case 'SET_DISPLAY_WIDTH':
            return action.displayWidth;
        default:
            return state;
    }
};

/**
 * This reducer is triggered when the scrolling hits the bottom on the blog.
 * @param state
 * @param action
 * @returns {boolean}
 */
const postLoading = (state = false, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return true;
        case 'NEW_BLOG_POSTS':
            return false;
        default:
            return false;
    }
};


const activePage = (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_PAGE':
            return action.page;
        default:
            return state;
    }
};

const activeMenuButton = (state = "aboutUs", action) => {
    switch (action.type) {
        case 'SET_ACTIVE_MENU_BUTTON':
            return action.location;
        case 'CHANGE_ACTIVE_PAGE':
            return action.page == "blogPost" ? null : state;
        default:
            return state;
    }
};

const activeMember = (state = null, action) => {
    switch (action.type) {
        case "SET_ACTIVE_MEMBER":
            return action.activeMember;
        default:
            return state;
    }
};

export const changeActiveMenuButton = (buttonId) => {
    return {
        type: "SET_ACTIVE_MENU_BUTTON",
        location: buttonId
    }
};

export const addActiveTags = (tags)=> {
    return {
        type: 'ADD_ACTIVE_TAGS',
        tags
    }
};
export const switchActiveTag = (tag) => {
    return {
        type: 'SWITCH_ACTIVE_TAG',
        tag
    }
};

export const addActiveTag = (tag) => {
    return {
        type: 'ADD_ACTIVE_TAG',
        tag
    }
};
export const removeActiveTag = (tag)=> {
    return {
        type: 'REMOVE_ACTIVE_TAG',
        tag
    }
};

export const logout = ()=> {
    return {
        type: 'LOGOUT'
    }
};
export const login = ()=> {
    return {
        type: 'LOGIN'
    }
};
export const loadBlogPost = (blogPost) => {
    return {
        type: "LOAD_POST",
        blogPost
    }
};
export const addBlogPosts = (posts) => {
    return {
        type: 'NEW_BLOG_POSTS',
        posts
    }
};
export const setInitialTags = (tags)=> {
    return {
        type: 'ADD_ALL_TAGS',
        tags
    }
};
export const addTag = (tag)=> {
    return {
        type: 'ADD_TAG',
        tag
    }
};
export const loggedInTrue = ()=> {
    return {
        type: 'LOGGED_IN_TRUE'
    }
};
export const loggedInFalse = ()=> {
    return {
        type: 'LOGGED_IN_FALSE'
    }
};

export const setActiveMember = (member) => {
    return {
        type: "SET_ACTIVE_MEMBER",
        activeMember: member
    }
};

let AppReducer = combineReducers({
    Tags,
    BlogPosts,
    BlogPost,
    ActiveTags,
    ActiveBlogPosts,
    activePage,
    LoggedIn,
    activeMenuButton,
    activeMember,
    displayWidth,
    postLoading
});
export default AppReducer;