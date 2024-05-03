import { del, get, post, put } from "../utils/api";
import { routes } from "../utils/constants";


export function getAllGames() {
    return get(routes.gamesOrdered);
}


export function getSingleGame(id) {
    return get(`${routes.games}/${id}`);
}


export function gameHandler(event, fields, view, setGames, navigate) {
    event.preventDefault();

    let { title, category, maxLevel, imageUrl, summary } = fields;
    title = title.trim(); category = category.trim(); 
    imageUrl = imageUrl.trim(); summary = summary.trim();

    if (title === "" || category === "" || maxLevel === "" || imageUrl === "" || summary === "") {
        return alert("You cannot submit empty fields!");
    }

    if (view === "Create") {

        post(routes.games, { title, category, maxLevel, imageUrl, summary })
        .then(data => {
            console.log(data);
            
            setGames(prev => [...prev, data]);
            
            navigate("/");
        })
        .catch(err => console.error(err)); // notify the user
    
    } else {
        const gameId = fields.id;

        put(`${routes.games}/${gameId}`, {title, category, maxLevel, imageUrl, summary})
        .then(data => {
            // console.log(data);
            
            setGames(prev => [data, ...(prev.filter(game => game._id !== data._id))]);

            navigate(`/details/${gameId}`);
        })
        .catch(err => console.error(err)); // notify the user
    }
}


export function deleteGameController(event, gameId, navigate, setGames) {
    event.preventDefault();

    const confirmation = confirm("Are you sure you want to delete this game?");

    if (confirmation) {
        del(`${routes.games}/${gameId}`)
        .then(data => {
            setGames(prev => prev.filter(game => game._id !== gameId));

            navigate("/");
        })
        .catch(err => console.error(err)); // notify the user
    } 
}