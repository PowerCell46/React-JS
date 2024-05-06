import { ReactNode } from "react";


export interface authenticationData {
    email: string,
    password: string,
    _createdOn: number,
    _id: string,
    accessToken: string
};


export interface solutionData {
    _ownerId: string,
    type: string,
    imageUrl: string,
    description: string,
    learnMore: string,
    _createdOn: number,
    _id: string
};


export interface likeData {
    _ownerId: string,
    solutionId: string,
    _createdOn: number,
    _id: string
};


export interface deleteSolutionData {
    _deletedOn: number;
};


export interface formField {
    fieldName: string,
    fieldId: string,
    fieldType: string, 
    placeholder: string
};


export interface InputProps {
    inputData: formField;
    value: string,
    onFieldChangeHandler: (fieldName: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};


export interface SolutionProps {
    solution: solutionData;
};


export interface TextAreaProps {
    inputData: formField;
    value: string,
    onFieldChangeHandler: (fieldName: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
};


export interface AuthProviderProps {
    children: ReactNode;
};


export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    userId: string|null
};


export interface SolutionsProviderProps {
    children: ReactNode;
};


export interface SolutionsContextType {
    solutions: solutionData[];
    setSolutions: React.Dispatch<React.SetStateAction<solutionData[]>>;
};


export interface UrlEndpoints {
    [key: string]: string;
}

export interface Params {
    id?: string;
    [key: string]: string | undefined;
  }