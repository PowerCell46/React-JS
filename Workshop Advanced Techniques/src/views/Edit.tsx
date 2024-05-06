// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { SolutionContext } from "../contexts/solutionContext";
import useForm from "../hooks/useForm";
import { solutionsFormFields } from "../utils/formFields";
import Input from "../components/Input";
import Textarea from "../components/Textarea";


export default function Edit() {
  // const { id } = useParams();
  // const { solutions } = useContext(SolutionContext);
  // const currentSolution = solutions.find(solution => solution._id === id);

  const { fields, onFieldChangeHandler } = useForm(solutionsFormFields);
   
  // if (currentSolution) {

  //   Object.keys(currentSolution).forEach(field => {
  //     console.log(field);
      
  //     if (Object.keys(fields).includes(field) || field === "imageUrl" || field === "learnMore") {
  //       setFields(prevVal => ({...prevVal, [field]: currentSolution[field]}));
        
  //     }      
  //   });
  // }
    
  console.log((fields));
  
    return (
        <section id="edit">
        <div className="form">
          <img className="border" src="./images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form className="edit-form">

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