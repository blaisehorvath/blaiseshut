/**
 * Created by v on 2016.04.22..
 */
import {combineReducers} from 'redux';

const Tags = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_TAGS':
            return [...action.tags]//TOOD:Rewrite all exsisting tags
        case 'ADD_TAG':
            return [action.tag, ...state]
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

const isMainPage = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_PAGE':
            return action.isMainPage ? true : false;
        default:
            return state;
    }
};

export const changeActivePage = (isMain) => {
    return {
        type: 'CHANGE_ACTIVE_PAGE',
        isMainPage: isMain
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

let AppReducer = combineReducers({
    Tags,
    BlogPosts,
    BlogPost,
    ActiveTags,
    ActiveBlogPosts,
    isMainPage,
    LoggedIn
});
export default AppReducer;