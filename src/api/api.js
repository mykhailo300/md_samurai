import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '3f32bba6-89e4-45a3-a0b0-c3ff76fc4991'
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
        return instance.get("auth/me");
    },
    loginUser(email, password, rememberMe) {
        return instance.post("auth/login", {email, password, rememberMe});
    },
    logOutUser() {
        return instance.delete("auth/login");
    },
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

