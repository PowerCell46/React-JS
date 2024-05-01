import { getAuthToken } from "./authUtils";
import { headerToken } from "./constants";


export function get(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(err => console.error(err));
}


export function post(url, body) {
    
    const headers = {"Content-type": "application/json"};

    const token = getAuthToken();
    
    token ? headers[headerToken] = token : null;

    return fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(err => console.error(err));
}


export function put(url, body) {
    const headers = {"Content-type": "application/json"};

    const token = getAuthToken();

    token ? headers[headerToken] = token : null;

    return fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(err => console.error(err));
}