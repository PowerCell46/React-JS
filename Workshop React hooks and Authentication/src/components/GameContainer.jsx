import { Link } from "react-router-dom";


export default function GameContainer({game}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl}/>
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/details/${game._id}`} state={{game}} className="details-button">Details</Link>
            </div>
        </div>
    );
}