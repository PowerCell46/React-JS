import { get, post } from "../utils/api";
import { urlEndpoints } from "../utils/constants";
import { likeData } from "../utils/interfaces";


export function getSolutionLikes(id: string|undefined): Promise<number> {
    return get(`${urlEndpoints.likes}?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`);
}


export function hasUserLiked(id: string|undefined, userId: string): Promise<0|1> {
    return get(`${urlEndpoints.likes}?where=solutionId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}


export function likeHandler(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
        solutionId: string|undefined,
        setNumberOfLikes: React.Dispatch<React.SetStateAction<number>>,
        hasLiked: boolean
):void {
    event.preventDefault();

    post<likeData>(urlEndpoints.likes, {solutionId})
    .then(data =>{
        console.log(data);
        
        setNumberOfLikes(prev => prev + 1);
        hasLiked = true;
    })
    .catch(err => console.error(err));
}