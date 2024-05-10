import { Navigate } from "react-router-dom"


export const AuthRequired = ({isAuthenticated, children}) => {
    if (!isAuthenticated) {
        return <Navigate to="/register"/>;
    }

    return children;
};


export const AuthForbidden = ({isAuthenticated, children}) => {
    if (isAuthenticated) {
        return <Navigate to="/"/>;
    }

    return children;
};