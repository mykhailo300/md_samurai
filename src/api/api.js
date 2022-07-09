import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "8a155cc8-c4bd-473b-a910-22bfbc61bb2b"
    }
})

export const usersAPI = {
    getUsers(pageSize, selectedPage) {
        return instance.get(`users?count=${pageSize}&page=${selectedPage}`)
            .then(
                response => {
                    return response.data;
                }
            )
    }
}

export const authAPI = {
    getMyUserData() {
        return instance.get("auth/me")
            .then(response => {
                return response.data;
            })
    },
    loginUser(email, password, rememberMe) {
        return instance.post("auth/login", {email, password, rememberMe});
    },
    logOutUser() {
        return instance.delete("auth/login");
    },
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url");
    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
    },
    saveProfileInfo(profileInfo){
        return instance.put("profile", profileInfo)
    }
}

export const followAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

