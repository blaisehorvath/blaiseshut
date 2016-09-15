/**
 * @const {Object} A consant that holds every possible action that can be fired in the app
 */
const actions = {
    CHANGE_ACTIVE_PAGE : "CHANGE_ACTIVE_PAGE",
    SET_ACTIVE_MENU_BUTTON : "SET_ACTIVE_MENU_BUTTON",
    SET_ACTIVE_MEMBER : "SET_ACTIVE_MEMBER",
};

export default actions;

//TODO: doc
export const changeActivePage = (page) => {
    return {
        type: 'CHANGE_ACTIVE_PAGE',
        page: page
    }
};
