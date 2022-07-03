import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET_PROFILE_PAGE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesNumber: 33},
        {id: 2, message: "It`s my first post", likesNumber: 0}
    ],
    profile: null,
    status: ""
}
let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.textOfPost,
                likesNumber: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_PROFILE_PAGE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (textOfPost) => ({type: ADD_POST, textOfPost});
export const setProfilePage = (profile) => ({type: SET_PROFILE_PAGE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getProfileInfo = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileInfo(userId);
        dispatch(setProfilePage(response.data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export default profileReducer;