export const AUTH_TOKEN = "token";

export const USER_ID = "userId";

const BASE_SERVER_URL = `http://localhost:3030`;


export const routes = {
    register: `${BASE_SERVER_URL}/users/register`,
    login: `${BASE_SERVER_URL}/users/login`,
    games: `${BASE_SERVER_URL}/data/games`,
    comments: `${BASE_SERVER_URL}/data/comments`
}


export const headerToken = "X-Authorization";