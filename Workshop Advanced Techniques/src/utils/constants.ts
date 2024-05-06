import { UrlEndpoints } from "./interfaces";


export const AUTH_TOKEN:string = "authToken";

export const USER_ID:string = "userId";

export const headerToken: string = "X-Authorization";

const BASE_URL: string = `http://localhost:3030`;

export const METHODS_WITH_BODY: string[] = ["POST", "PUT", "PATCH"];


export const urlEndpoints:UrlEndpoints = {
    register: `${BASE_URL}/users/register`,
    login: `${BASE_URL}/users/login`,
    solutions: `${BASE_URL}/data/solutions`,
    likes: `${BASE_URL}/data/likes`
};