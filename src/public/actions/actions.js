/**
 * @const {Object} A consant that holds every possible action that can be fired in the app
 */
const actions = {
    CHANGE_ACTIVE_PAGE : "CHANGE_ACTIVE_PAGE",
    SET_ACTIVE_MENU_BUTTON : "SET_ACTIVE_MENU_BUTTON",
    SET_ACTIVE_MEMBER : "SET_ACTIVE_MEMBER",
    SET_DISPLAY_WIDTH : "SET_DISPLAY_WIDTH",
    MESSAGE_FAIL : "MESSAGE_FAIL",
    MESSAGE_SUCCESS : "MESSAGE_SUCCESS",
    CLEAR_MESSAGE : "CLEAR_MESSAGE"
};

export default actions;

//TODO: doc
export const changeActivePage = (page) => {
    return {
        type: 'CHANGE_ACTIVE_PAGE',
        page: page
    }
};

// used in the contact us form
export const messageSuccess = () => {
    return {
        type: 'MESSAGE_SUCCESS'
    }
};

// used in the contact us form
export const messageFail = () => {
    return {
        type: 'MESSAGE_FAIL'
    }
};

// used in the contact us form
export const clearMessage = () => {
    return {
        type: 'CLEAR_MESSAGE'
    }
};
