import {apiService} from "./apiService";
import {urls} from "../configs";

const accessToken = 'access'
const refreshToken = 'refresh'

const authService = {
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred)

        if(response.status === 200){
            this.setTokenKey(response.data)
        }
        return response
    },
    refresh: (refresh) => apiService.post(urls.auth.refresh, {refresh}),
    me: () => apiService.get(urls.auth.me),

    setTokenKey: ({access, refresh}) => {
        localStorage.setItem(accessToken, access)
        localStorage.setItem(refreshToken, refresh)
    },
    getAccessToken: () => localStorage.getItem(accessToken),
    getRefreshToken: () => localStorage.getItem(refreshToken),

    deleteToken: () => {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },

    isAuthenticated: () => !!localStorage.getItem(accessToken)

}

export {authService}