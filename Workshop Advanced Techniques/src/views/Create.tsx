import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { solutionHandler } from "../controllers/solutionsController";
import useForm from "../hooks/useForm"
import { solutionsFormFields } from "../utils/formFields"
import { useContext } from "react";
import { SolutionContext } from "../contexts/solutionContext";


export default function Create() {
  const {setSolutions} = useContext(SolutionContext);
  const {fields, onFieldChangeHandler} = useForm(solutionsFormFields);
  const navigate = useNavigate();

    return (
        <section id="create">
          <div className="form">
            <img className="border" src="/images/border.png" alt="" />
            <h2>Add Solution</h2>

            <form onSubmit={(event) => solutionHandler(event, fields, "Create", navigate, setSolutions)} className="create-form">

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
             
              <button type="submit">Add Solution</button>
            </form>

          </div>
        </section>
    );
}