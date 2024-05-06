import { createContext, ReactNode, useEffect, useState } from "react";
import { getUserId, isUserAuthenticated } from "../utils/authUtils";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    userId: string|null
}

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
