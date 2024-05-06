import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { SolutionContext } from "../contexts/solutionContext";
import { AuthContext } from "../contexts/authContext";
import { deleteSolutionHandler } from "../controllers/solutionsController";


export default function Details() {
  const {id} = useParams();
  const {solutions} = useContext(SolutionContext);
  const currentSolution = solutions.find(solution => solution._id === id);
  
  const {userId} = useContext(AuthContext);
  const isUserOwner = userId === currentSolution?._ownerId;
  const isLoggedIn = userId !== null;
  
  const navigate = useNavigate();
  
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

              <h3>Like Solution:<span id="like">0</span></h3>

              <div id="action-buttons">
                {isUserOwner ? 
                  <>
                    <Link to={`/edit/${currentSolution?._id}`} id="edit-btn">Edit</Link>
                    <Link onClick={(event) => deleteSolutionHandler(event, currentSolution?._id, navigate)} to={`/delete/${currentSolution?._id}`} id="delete-btn">Delete</Link>
                  </>
                :
                  null  
                }
              
                {!isUserOwner && isLoggedIn ? 
                  <a href="#" id="like-btn">Like</a>
                :
                  null
                }
              </div>

            </div>
          </div>
        </section>
    );
}