import { NavigateFunction } from "react-router-dom";
import { del, get, post, put } from "../utils/api";
import { urlEndpoints } from "../utils/constants";
import { deleteSolutionData, solutionData } from "../utils/interfaces";


export function solutionHandler(
        event: React.FormEvent<HTMLFormElement>,
        fields: any, 
        view: string,
        navigate: NavigateFunction,
        setSolutions: React.Dispatch<React.SetStateAction<solutionData[]>>
):void {
    event.preventDefault();

    let {type, description} = fields;
    let imageUrl = fields['image-url'];
    let learnMore = fields['more-info'];

    type = type.trim(); description = description.trim(); // sanitization
    imageUrl = imageUrl.trim(); learnMore = learnMore.trim(); // sanitization
    
    if (type === "" || description === "" || imageUrl === "" || learnMore === "") { // validation
        return alert("All fields must be filled in!");
    }

    if (view === "Create") {
        post<solutionData>(urlEndpoints.solutions, {type, imageUrl, description, learnMore})
        .then((data: solutionData) => {
            console.log(data);
            
            navigate("/dashboard");
        })
        .catch(err => console.error(err));

    } else {
        const id = fields.id;

        put<solutionData>(`${urlEndpoints.solutions}/${id}`, {type, imageUrl, description, learnMore})
        .then((data: solutionData) => {
            console.log(data);
            
            setSolutions(prev => ([...prev.filter(solution => solution._id !== id), data]));

            navigate(`/details/${id}`);
        })
        .catch(err => console.error(err));
    }
}


export function getAllSolutions(): Promise<solutionData[]> {
    return get(urlEndpoints.solutions) as Promise<solutionData[]>;
}


export function getSingleSolution(id: string|undefined): Promise<solutionData> {
    return get(`${urlEndpoints.solutions}/${id}`);
}


export function deleteSolutionHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string | undefined,
    navigate: NavigateFunction
):void {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this Solution?");

    if (confirmation) {
        del<deleteSolutionData>(`${urlEndpoints.solutions}/${id}`)
        .then(res => {
            console.log(res);

            navigate("/dashboard");
        })
        .catch(err => console.error(err));
    }
}


export function handleSettingStartingValue(
        setFields: React.Dispatch<React.SetStateAction<Record<string, string>>>,
        solution: solutionData
):void {
    setFields(prev => ({...prev, type: solution.type || ''}));
    setFields(prev => ({...prev, description: solution.description || ''}));
    setFields(prev => ({...prev, "image-url": solution.imageUrl || ''}));
    setFields(prev => ({...prev, "more-info": solution.learnMore || ''}));
    setFields(prev => ({...prev, id: solution._id || ''})); 
}