import { useContext, useEffect } from "react";
import { SolutionContext } from "../contexts/solutionContext";
import { getAllSolutions } from "../controllers/solutionsController";
import Solution from "../components/Solution";
import { solutionData } from "../utils/interfaces";


export default function Dashboard() {
  const {solutions, setSolutions} = useContext(SolutionContext);
  
  useEffect(() => {
    getAllSolutions()
      .then((data: solutionData[]) => setSolutions(data))
      .catch(err => console.error(err));
  }, []);
  
    return (
        <>
          <h2>Solutions</h2>
          
          {solutions.length > 0 ?
            <section id="solutions">
                {solutions.map(solution => <Solution key={solution._id} solution={solution}/>)}
            </section>
          :
            <h2 id="no-solution">No Solutions Added.</h2>
          }

        </>
    );
}