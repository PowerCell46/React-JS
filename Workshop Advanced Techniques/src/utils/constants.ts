export const AUTH_TOKEN:string = "authToken";

export const USER_ID:string = "userId";

export const headerToken: string = "X-Authorization";

const BASE_URL: string = `http://localhost:3030`;

export const METHODS_WITH_BODY = ["POST", "PUT", "PATCH"];


export const urlEndpoints = {
    register: `${BASE_URL}/users/register`,
    login: `${BASE_URL}/users/login`,
    solutions: `${BASE_URL}/data/solutions`
};