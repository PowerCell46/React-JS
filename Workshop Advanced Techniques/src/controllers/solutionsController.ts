import { NavigateFunction } from "react-router-dom";
import { get, post } from "../utils/api";
import { urlEndpoints } from "../utils/constants";


export interface solutionData {
    _ownerId: string,
    type: string,
    imageUrl: string,
    description: string,
    learnMore: string,
    _createdOn: number,
    _id: string
}


export function solutionHandler(event: React.FormEvent<HTMLFormElement>, fields: any, navigate: NavigateFunction):void {
    event.preventDefault();

    let {type, description} = fields;
    let imageUrl = fields['image-url'];
    let learnMore = fields['more-info'];
    type = type.trim(); description = description.trim();
    imageUrl = imageUrl.trim(); learnMore = learnMore.trim();
    
    if (type === "" || description === "" || imageUrl === "" || learnMore === "") {
        return alert("All fields must be filled in!");
    }

    post<solutionData>(urlEndpoints.solutions, {type, imageUrl, description, learnMore})
    .then((data: solutionData) => {
        console.log(data);
        
        navigate("/");
    })
    .catch(err => console.error(err));
}

export function getAllSolutions(): Promise<solutionData[]> {
    return get(urlEndpoints.solutions) as Promise<solutionData[]>;
}
