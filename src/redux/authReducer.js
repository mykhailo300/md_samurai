import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    captchaUrl: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state;
    }
};
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const setAuthUserData = (email, userId, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {email, userId, login, isAuth}
});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getMyUserData()
        if (data.resultCode === 0) {
            let {email, id, login} = data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
    }
}

export const loginUser = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        let response = await authAPI.loginUser(email, password, rememberMe)
        debugger;
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: messageError}));
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

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let response = await authAPI.getCaptchaUrl();

        dispatch(getCaptchaUrlSuccess(response.data.url));
    }
}
export default authReducer;