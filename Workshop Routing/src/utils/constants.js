export const AUTH_TOKEN = "token";


const BASE_SERVER_URL = `http://localhost:3030`;


export const routes = {
    register: `${BASE_SERVER_URL}/users/register`,
    login: `${BASE_SERVER_URL}/users/login`
}