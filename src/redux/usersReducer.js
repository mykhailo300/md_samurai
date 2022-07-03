import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_DISABLED_BUTTON = "SET_IS_DISABLED_BUTTON";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    selectedPage: 1,
    isFetching: true,
    isDisabledButtons: [],
}
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})

            }
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_SELECTED_PAGE:
            return {...state, selectedPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_IS_DISABLED_BUTTON:
            return {
                ...state,
                isDisabledButtons: action.isFetching
                    ? [...state.isDisabledButtons, action.userId]
                    : state.isDisabledButtons.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setSelectedPage = (page) => ({type: SET_SELECTED_PAGE, page})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setIsDisabledButton = (userId, isFetching) => ({
    type: SET_IS_DISABLED_BUTTON,
    userId,
    isFetching
})


//Thunks

export const getUsers = (pageSize, selectedPage) => {
    return async (dispatch) => {
        dispatch(setSelectedPage(selectedPage));
        dispatch(setIsFetching(true));

        let data = await usersAPI.getUsers(pageSize, selectedPage)
        dispatch(setIsFetching(false));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setUsers(data.items));
    }
}

const followUnFollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setIsDisabledButton(userId, true));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setIsDisabledButton(userId, false));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollow(dispatch, userId, followAPI.followUser.bind(usersAPI), followSuccess)
    }
}
export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnFollow(dispatch, userId, followAPI.unFollowUser.bind(usersAPI), unFollowSuccess)
    }
}

export default usersReducer;