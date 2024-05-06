import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SolutionContext } from "../contexts/solutionContext";
import useForm from "../hooks/useForm";
import { solutionsFormFields } from "../utils/formFields";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { getSingleSolution, handleSettingStartingValue, solutionHandler } from "../controllers/solutionsController";
import { useNavigate } from "react-router-dom";
import { solutionData } from "../utils/interfaces";


export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { solutions, setSolutions } = useContext(SolutionContext);
  const currentSolution = solutions.find(solution => solution._id === id);
  
  const { fields, onFieldChangeHandler, setFields } = useForm(solutionsFormFields);
   
  useEffect(() => {
    if (currentSolution) {
      handleSettingStartingValue(setFields, currentSolution);
       
    } else {
      getSingleSolution(id)
      .then((data: solutionData) => handleSettingStartingValue(setFields, data))
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