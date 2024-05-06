import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SolutionContext } from "../contexts/solutionContext";
import useForm from "../hooks/useForm";
import { solutionsFormFields } from "../utils/formFields";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { getSingleSolution, solutionData, solutionHandler } from "../controllers/solutionsController";
import { useNavigate } from "react-router-dom";


export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { solutions, setSolutions } = useContext(SolutionContext);
  const currentSolution = solutions.find(solution => solution._id === id);
  
  const { fields, onFieldChangeHandler, setFields } = useForm(solutionsFormFields);
   
  useEffect(() => {
    if (currentSolution) {
      setFields(prev => ({...prev, type: currentSolution.type || ''}));
      setFields(prev => ({...prev, description: currentSolution.description || ''}));
      setFields(prev => ({...prev, "image-url": currentSolution.imageUrl || ''}));
      setFields(prev => ({...prev, "more-info": currentSolution.learnMore || ''}));
      setFields(prev => ({...prev, id: currentSolution._id || ''})); 
    } else {
      getSingleSolution(id)
      .then((data: solutionData) => {
        setFields(prev => ({...prev, type: data.type || ''}));
        setFields(prev => ({...prev, description: data.description || ''}));
        setFields(prev => ({...prev, "image-url": data.imageUrl || ''}));
        setFields(prev => ({...prev, "more-info": data.learnMore || ''}));
        setFields(prev => ({...prev, id: data._id || ''}));
      })
      .catch(err => console.error(err));      
    }
  }, []);

  return (
        <section id="edit">
        <div className="form">
          <img className="border" src="/images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form onSubmit={(event) => solutionHandler(event, fields, "Edit", navigate, setSolutions)} className="edit-form">

          {solutionsFormFields
              .filter(field => field.fieldType !== "textarea")
              .map(field => 
                  <Input key={field.fieldId} inputData={field} 
                  value={fields[field.fieldName]} onFieldChangeHandler={onFieldChangeHandler}
              />)
              }
              
              {solutionsFormFields
              .filter(field => field.fieldType === "textarea")
              .map(field => 
                  <Textarea key={field.fieldId} inputData={field} 
                  value={fields[field.fieldName]} onFieldChangeHandler={onFieldChangeHandler}
              />)
              }

            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
    );
}