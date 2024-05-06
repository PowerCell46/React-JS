import { Link } from "react-router-dom";
import { SolutionProps } from "../utils/interfaces";


export default function Solution({ solution }: SolutionProps) {
    return (
        <div className="solution">
            <img src={solution.imageUrl} alt={solution.type} />
            <div className="solution-info">
              <h3 className="type">{solution.type}</h3>
              <p className="description">
                {solution.description}
              </p>
              <Link className="details-btn" to={`/details/${solution._id}`}>Learn More</Link>
            </div>
          </div>
    );
}