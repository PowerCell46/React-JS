import { createContext, useEffect, useState } from "react";
import { getAllSolutions } from "../controllers/solutionsController";
import { solutionData, SolutionsContextType, SolutionsProviderProps } from "../utils/interfaces";


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