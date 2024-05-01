import { get, post } from "../utils/api";
import { routes } from "../utils/constants";


export function getAllGames() {
    return get(routes.games);
}


export function createGameHandler(event, fields, navigate) {
    event.preventDefault();

    const {title, category, maxLevel, imageUrl, summary} = fields;
    // validations


    post(routes.games, {title, category, maxLevel, imageUrl, summary})
    .then(data => {
        // console.log(data);

        navigate("/");
    })
    .catch(err => console.error(err)) // notify the user
}