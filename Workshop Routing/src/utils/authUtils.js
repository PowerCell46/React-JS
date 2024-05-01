import { AUTH_TOKEN, USER_ID } from "./constants";


export const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN);
}


export const getUserId = () => {
    return localStorage.getItem(USER_ID);
}


export const setAuthData = (token, id) => {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(USER_ID, id);
}


export const removeAuthData = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER_ID);
}


export const isUserAuthenticated = () => {
    return !!getAuthToken();
}