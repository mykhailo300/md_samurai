import {createSelector} from "reselect";

export const getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getAllUsersSelector = createSelector(getAllUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getIsDisabledButtons = (state) => {
    return state.usersPage.isDisabledButtons;
}

