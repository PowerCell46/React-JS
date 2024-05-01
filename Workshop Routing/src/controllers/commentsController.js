import { get, post } from "../utils/api";
import { routes } from "../utils/constants";


export function postCommentHandler(event, comment, gameId, setComments) {
    event.preventDefault();

    post(`${routes.comments}`, {gameId, comment})
    .then(data => setComments(prevVal => [...prevVal, data]))
    .catch(err => console.error(err)); // notify the user
}


export function getGameComments(gameId) {
    return get(`${routes.comments}?where=gameId%3D%22${gameId}%22`);
}