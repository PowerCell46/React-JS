import { createContext, useEffect, useState } from "react";
import { getUserId, isUserAuthenticated } from "../utils/authUtils";
import { AuthContextType, AuthProviderProps } from "../utils/interfaces";


export const AuthContext = createContext<AuthContextType>({} as AuthContextType); 


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(isUserAuthenticated());
    }, []);

    const values: AuthContextType = {
        isAuthenticated,
        setIsAuthenticated,
        userId: getUserId()
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
