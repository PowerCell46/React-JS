import { getAuthToken } from "./authUtils";

export function get(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(err => console.error(err));
}


export function post(url, body) {
    
    const headers = {"Content-type": "application/json"};

    const token = getAuthToken();
    
    token ? headers["X-Authorization"] = token : null;

    return fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(err => console.error(err));

}