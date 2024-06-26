import { getAuthToken } from "./authUtils";
import { headerToken } from "./constants";


export function get(url) {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();

        } else {
            return response.json().then(errorData => {
                alert(errorData.message);
                throw errorData; 
                
            }).catch(() => {
                const errorObject = { code: response.status, message: response.statusText };
                throw errorObject;
            });
        }
    });
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
    .then(response => {
        if (response.ok) {
            return response.json();

        } else {
            return response.json().then(errorData => {
                alert(errorData.message);
                throw errorData; 
                
            }).catch(() => {
                const errorObject = { code: response.status, message: response.statusText };
                throw errorObject;
            });
        }
    });
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
    .then(response => {
        if (response.ok) {
            return response.json();

        } else {
            return response.json().then(errorData => {
                alert(errorData.message);
                throw errorData; 
                
            }).catch(() => {
                const errorObject = { code: response.status, message: response.statusText };
                throw errorObject;
            });
        }
    });
}


export function del(url) {
    const headers = {};

    const token = getAuthToken();

    token ? headers[headerToken] = token : null;

    return fetch(url, {
        method: "DELETE",
        headers: headers,
    })
    .then(response => {
        if (response.ok) {
            return response.json();

        } else {
            return response.json().then(errorData => {
                alert(errorData.message);
                throw errorData; 
                
            }).catch(() => {
                const errorObject = { code: response.status, message: response.statusText };
                throw errorObject;
            });
        }
    });
}