import { getAuthToken } from "./authUtils";
import { METHODS_WITH_BODY, headerToken } from "./constants";


async function api<T>(url: string, method: string, body?: T): Promise<T> {
    let headers: { [key: string]: string } = {};

    if (METHODS_WITH_BODY.includes(method)) headers["Content-type"] = "application/json";

    const token = getAuthToken();

    if (token !== null) headers[headerToken] = token;

    try {
        const response = await fetch(url, {
            method, 
            headers,
            body: body ? JSON.stringify(body) : undefined
        });
        const jsonData: any = await response.json();

        if (!response.ok) {
            alert(jsonData.message);

            const errorMessage = jsonData.message ? 
                `HTTP error ${response.status}: ${jsonData.message}` 
            : 
                `HTTP error ${response.status}: Unknown error`;
            console.error(errorMessage);

            throw {code: response.status, message: jsonData.message || response.statusText};
        }

        return jsonData as T;
    
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error in POST request: ${error.message}`);
            throw error;

        } else {
            console.error(`An unknown error occurred: ${String(error)}`);
            throw new Error('An unknown error occurred');
        }
    }
}

export const get = (url: string) => api(url, "GET", undefined);

export const post = (url: string, body: any) => api(url, "POST", body);

export const put = (url: string, body: any) => api(url, "PUT", body);

export const patch = (url: string, body: any) => api(url, "PATCH", body);

export const del = (url: string) => api(url, "DELETE", undefined);
