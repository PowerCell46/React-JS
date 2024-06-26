import { NavigateFunction } from "react-router-dom";
import { post } from "../utils/api";
import { removeAuthData, setAuthData } from "../utils/authUtils";
import { urlEndpoints } from "../utils/constants";
import { authenticationData } from "../utils/interfaces";


export function authenticationHandler(
            event: React.FormEvent<HTMLFormElement>, 
            fields: any, 
            setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>, 
            navigate:NavigateFunction
): void {
    event.preventDefault();
    
    let {email, password} = fields;
    email = email.trim(); password = password.trim(); // sanitization

    if (!email || !password) { // validation
        return alert("All fields are required!");
    }
    
    if (fields["re-password"] !== undefined) {
        let repeatPassword: string = fields["re-password"];
        repeatPassword = repeatPassword.trim();

        if (!repeatPassword) { // validation
            return alert("All fields are required!");

        } else if (repeatPassword !== password) { // validation
            return alert("Password and Repeat Password must match!");
        }
    }
    
    post<authenticationData>(fields["re-password"] !== undefined ? urlEndpoints.register : urlEndpoints.login, {email, password})
    .then((data: authenticationData) => {
        setAuthData(data.accessToken, data._id);

        setIsAuthenticated(true);

        navigate("/");
    })
    .catch(err => console.error(err));
}


export function logoutHandler(
            event: React.MouseEvent<HTMLAnchorElement>, 
            setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>, 
            navigate:NavigateFunction
): void {
    event.preventDefault();

    removeAuthData();

    setIsAuthenticated(false);

    navigate("/");
}