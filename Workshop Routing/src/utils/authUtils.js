import { AUTH_TOKEN } from "./constants";


export const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN);
}


export const setAuthToken = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
}


export const removeAuthToken = () => {
    localStorage.removeItem(AUTH_TOKEN);
}


export const isUserAuthenticated = () => {
    return !!getAuthToken();
}