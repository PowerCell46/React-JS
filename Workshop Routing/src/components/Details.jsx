import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { deleteGameController, getSingleGame } from "../controllers/gamesController";
import { getUserId } from "../utils/authUtils";
import {getGameComments, postCommentHandler} from "../controllers/commentsController";
import Comment from "./Comment";


export default function Details() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [game, setGame] = useState({});
    const location = useLocation();
    const userId = getUserId();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onCommentChangeHandler = (event) => setComment(event.target.value);

    const data = location.state?.game;
   
    useEffect(() => {
        if (data) {
            setGame(data);

        } else {
            getSingleGame(id)
            .then(data => setGame(data))
            .catch(err => console.error(err)); // notify the user
        }

        getGameComments(id)
        .then(data => setComments(data))
        .catch(err => console.error(err));        
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

            <div className="details-comments">
                <h2>Comments:</h2>
                {comments.length > 0 ?
                    <ul>
                        {comments.map(comment => <Comment comment={comment.comment}/>)}
                    </ul> 
                :
                    <p className="no-comment">No comments.</p>
                }               
            </div>

            {userId === game._ownerId ? 
                <div className="buttons">
                     <Link to={`/edit/${game._id}`} state={{game}} className="button">Edit</Link>
                     <Link onClick={(event) => deleteGameController(event, id, navigate)} className="button">Delete</Link>
                </div>
            : 
                null    
            }
        </div>

        {userId !== null && userId !== game._ownerId ? 
            <article className="create-comment">
                <label>Add new comment:</label>
                <form onSubmit={(event) => postCommentHandler(event, comment, id, setComments)} className="form">
                    <textarea onChange={onCommentChangeHandler} name="comment" placeholder="Comment......" value={comment}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>
        : 
            null
        }

    </section>
    );
}