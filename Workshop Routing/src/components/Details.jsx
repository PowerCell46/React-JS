import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { getSingleGame } from "../controllers/gamesController";
import { getUserId } from "../utils/authUtils";


export default function Details() {
    const {id} = useParams();
    const [game, setGame] = useState({});
    const location = useLocation();
    const userId = getUserId();

    const data = location.state?.game;
   
    useEffect(() => {
        if (data) {
            setGame(data);

        } else {
            getSingleGame(id)
            .then(data => setGame(data))
            .catch(err => console.error(err)); // notify the user
        }
    }, []);

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                <p className="no-comment">No comments.</p>
            </div>

            {userId === game._ownerId ? 
                <div className="buttons">
                     <Link to={`/edit/${game._id}`} state={{game}} className="button">Edit</Link>
                     <Link to={`/delete/${game._id}`} state={{game}} className="button">Delete</Link>
                </div>
            : 
                null    
            }
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        {/* <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article> */}

    </section>
    );
}