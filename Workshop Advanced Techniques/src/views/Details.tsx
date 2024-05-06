import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { SolutionContext } from "../contexts/solutionContext";
import { AuthContext } from "../contexts/authContext";
import { deleteSolutionHandler } from "../controllers/solutionsController";
import { getSolutionLikes, hasUserLiked, likeHandler } from "../controllers/likesController";

interface Params {
  id?: string;
  [key: string]: string | undefined;
}

export default function Details() {
  const navigate = useNavigate();

  const { id }: Params = useParams<Params>() as Params;
  const {solutions} = useContext(SolutionContext);
  const currentSolution = solutions.find(solution => solution._id === id);
  
  const {userId} = useContext(AuthContext);
  const isUserOwner:boolean = userId === currentSolution?._ownerId;
  const isLoggedIn:boolean = userId !== null;
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(true);

  getSolutionLikes(id)
  .then((numOfLikes:number) => setNumberOfLikes(numOfLikes))
  .catch(err => console.error(err));

  if (isLoggedIn && userId !== null) {
    hasUserLiked(id, userId)
    .then((currUserNumLikes: number) => setHasLiked(currUserNumLikes === 1))
    .catch(err => console.error(err));
  }
  
    return (
        <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src={currentSolution?.imageUrl}
              alt={currentSolution?.type}
            />
            <div>
              <p id="details-type">{currentSolution?.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                    {currentSolution?.description}
                  </p>
                  <p id="more-info">
                    {currentSolution?.learnMore}
                  </p>
                </div>
              </div>

              <h3>Like Solution:<span id="like">{numberOfLikes}</span></h3>

              <div id="action-buttons">
                {isUserOwner ? 
                  <>
                    <Link to={`/edit/${currentSolution?._id}`} id="edit-btn">Edit</Link>
                    <Link onClick={(event) => deleteSolutionHandler(event, currentSolution?._id, navigate)} to={`/delete/${currentSolution?._id}`} id="delete-btn">Delete</Link>
                  </>
                :
                  null  
                }
              
                {!isUserOwner && isLoggedIn && !hasLiked ? 
                  <Link onClick={(event) => likeHandler(event, id, setNumberOfLikes, hasLiked)} to={`/like/${currentSolution?._id}`} id="like-btn">Like</Link>
                :
                  null
                }
              </div>

            </div>
          </div>
        </section>
    );
}