import { get, post } from "../utils/api";
import { routes } from "../utils/constants";


export function getAllGames() {
    return get(routes.games);
}

export function getSingleGame(id) {
    return get(`${routes.games}/${id}`);
}


export function createGameHandler(event, fields, setGames, navigate) {
    event.preventDefault();

    const { title, category, maxLevel, imageUrl, summary } = fields;
    // validations


    post(routes.games, { title, category, maxLevel, imageUrl, summary })
        .then(data => {
            console.log(data);
            
            setGames(prev => [...prev, data]);

            navigate("/");
        })
        .catch(err => console.error(err)) // notify the user
}