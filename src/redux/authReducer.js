import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        default:
            return state;
    }
};
export const setAuthUserData = (email, userId, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {email, userId, login, isAuth}
});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.getMyUserData();
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
    }
}

export const loginUser = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        let response = await authAPI.loginUser(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    }
}

export const logOutUser = () => {
    return async (dispatch) => {
        let response = await authAPI.logOutUser()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;