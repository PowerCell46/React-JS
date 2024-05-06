import { createContext, ReactNode, useEffect, useState } from "react";
import { getAllSolutions, solutionData } from "../controllers/solutionsController";


interface SolutionsProviderProps {
    children: ReactNode;
}


interface SolutionsContextType {
    solutions: solutionData[];
    setSolutions: React.Dispatch<React.SetStateAction<solutionData[]>>;
}


export const SolutionContext = createContext<SolutionsContextType>({} as SolutionsContextType);


export const SolutionsProvider = ({ children }: SolutionsProviderProps) => {
    const [solutions, setSolutions] = useState<solutionData[]>([]);

    useEffect(() => {
        getAllSolutions()
            .then((data: solutionData[]) => setSolutions(data))
            .catch(err => console.error(err));
    }, []);

    const values: SolutionsContextType = {
        solutions,
        setSolutions
    };

    return (
        <SolutionContext.Provider value={values}>
            {children}
        </SolutionContext.Provider>
    );
}