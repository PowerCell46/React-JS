import { AUTH_TOKEN, USER_ID } from "./constants";


export function getAuthToken():string|null {
    return localStorage.getItem(AUTH_TOKEN);
}


export function isUserAuthenticated():boolean {
    return !!getAuthToken();
}


export function getUserId():string|null {
    return localStorage.getItem(USER_ID);
}