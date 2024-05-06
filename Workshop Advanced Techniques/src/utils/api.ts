import { getAuthToken } from "./authUtils";
import { METHODS_WITH_BODY, headerToken } from "./constants";


async function api<T>(url: string, method: string, body?: any): Promise<T> {
    let headers: { [key: string]: string } = {};

    if (METHODS_WITH_BODY.includes(method)) {
        headers["Content-type"] = "application/json";
    }

    const token = getAuthToken();
    if (token !== null) {
        headers[headerToken] = token;
    }

    try {
        const response = await fetch(url, {
            method, 
            headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const jsonData = await response.json();

        if (!response.ok) {
            const errorMessage = jsonData.message ?
                `HTTP error ${response.status}: ${jsonData.message}` :
                `HTTP error ${response.status}: Unknown error`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        return jsonData as T;

    } catch (error: unknown) {
        if (error instanceof Error) {
            alert(error.message);
            
            console.error(`Error in request: ${error.message}`);
            
            throw error;

        } else {
            console.error(`An unknown error occurred: ${String(error)}`);
            throw new Error('An unknown error occurred');
        }
    }
}


export const get = <T>(url: string): Promise<T> => api<T>(url, "GET");

export const post = <T>(url: string, body: any): Promise<T> => api<T>(url, "POST", body);

export const put = <T>(url: string, body: any): Promise<T> => api<T>(url, "PUT", body);

export const patch = <T>(url: string, body: any): Promise<T> => api<T>(url, "PATCH", body);

export const del = <T>(url: string): Promise<T> => api<T>(url, "DELETE");