import { get, post, put } from "../utils/api";
import { routes } from "../utils/constants";


export function getAllGames() {
    return get(routes.games);
}

export function getSingleGame(id) {
    return get(`${routes.games}/${id}`);
}


export function gameHandler(event, fields, view, setGames, navigate) {
    event.preventDefault();

    const { title, category, maxLevel, imageUrl, summary } = fields;
    // validations


    if (view === "Create") {

        post(routes.games, { title, category, maxLevel, imageUrl, summary })
        .then(data => {
            // console.log(data);
            
            setGames(prev => [...prev, data]);
            
            navigate("/");
        })
        .catch(err => console.error(err)); // notify the user
    
    } else {
        const gameId = fields.id;

        put(`${routes.games}/${gameId}`, {title, category, maxLevel, imageUrl, summary})
        .then(data => {
            // console.log(data);
            
            setGames(prev => [...(prev.filter(game => game._id !== data._id)), data]);

            navigate(`/details/${gameId}`);
        })
        .catch(err => console.error(err)); // notify the user
    }
}