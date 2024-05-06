import { NavigateFunction } from "react-router-dom";
import { del, get, post } from "../utils/api";
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


interface DeleteData {
    "_deletedOn": number;
}


export function deleteSolutionHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
    navigate: NavigateFunction
) {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this Solution?");

    if (confirmation) {
        del<DeleteData>(`${urlEndpoints.solutions}/${id}`)
        .then(res => {
            console.log(res);

            navigate("/dashboard");
        })
        .catch(err => console.error(err));
    }
}