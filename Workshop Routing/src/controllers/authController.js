import { post } from "../utils/api";
import { removeAuthToken, setAuthToken } from "../utils/authUtils";
import { routes } from "../utils/constants";


export function authenticationHandler(event, fields, view, setIsAuthenticated, navigate) {
    event.preventDefault();

    const {email, password} = fields;

    if (email === "" || password === "") {
        return alert("You cannot submit empty fields!");
    }


    if (view === "Register") {
        const repeatPass = fields["confirm-password"]; 

        if (password !== repeatPass) {
            return alert("Password and Repeat Password must match!");
        }
    } 
    
    post(view === "Login" ? routes.login : routes.register, {email, password})
    .then(data => {
        console.log(data);

        setAuthToken(data.accessToken);

        setIsAuthenticated(true);

        navigate("/");
    })
    .catch(err => console.error(err)); // notify the user
}


export function logoutHandler(event, setIsAuthenticated, navigate) {
    event.preventDefault();
    
    removeAuthToken();

    setIsAuthenticated(false);

    navigate("/");
}