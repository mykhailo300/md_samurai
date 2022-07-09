import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET_PROFILE_PAGE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (textOfPost) => ({type: ADD_POST, textOfPost});
export const setProfilePage = (profile) => ({type: SET_PROFILE_PAGE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});



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
        try{
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
            debugger;
        }

    }
}
export const savePhoto = (photoFile) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(photoFile)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}

export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileInfo.userId = userId;
    const response = await profileAPI.saveProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
        dispatch(getProfileInfo(userId));
    } else {
        dispatch(stopSubmit("saveProfile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;