import { get, post } from "../utils/api";
import { removeAuthData, setAuthData } from "../utils/authUtils";
import { routes } from "../utils/constants";


export function authenticationHandler(event, fields, view, setIsAuthenticated, navigate) {
    event.preventDefault();

    let {email, password} = fields;
    email = email.trim(); password = password.trim();

    if (email === "" || password === "") {
        return alert("You cannot submit empty fields!");
    }

    if (view === "Register") {
        const repeatPass = fields["confirm-password"].trim(); 

        if (password !== repeatPass) {
            return alert("Password and Repeat Password must match!");
        }
    } 
    
    post(view === "Login" ? routes.login : routes.register, {email, password})
    .then(data => {
        // console.log(data);

        setAuthData(data.accessToken, data._id);

        setIsAuthenticated(true);

        navigate("/");
    })
    .catch(err => console.error(err)); // notify the user
}


export function logoutHandler(event, setIsAuthenticated, navigate) {
    event.preventDefault();
 
    get(routes.logout)
    .then(() => {
        removeAuthData();

        setIsAuthenticated(false);
        
        navigate("/");
    })
    .catch(err => console.error(err));
}