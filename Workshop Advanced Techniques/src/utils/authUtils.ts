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


export function setAuthData(accessToken: string, id: string):void {
    localStorage.setItem(AUTH_TOKEN, accessToken);
    localStorage.setItem(USER_ID, id);
}


export function removeAuthData(): void {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER_ID);
}