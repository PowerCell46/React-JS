import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { registerFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";
import { authenticationHandler } from "../controllers/authController";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";


export default function Register() {
  const {setIsAuthenticated} = useContext(AuthContext);
  const {fields, onFieldChangeHandler} = useForm(registerFormFields);
  const navigate = useNavigate();

    return (
        <section id="register">
        <div className="form">
          <img className="border" src="/images/border.png" alt="" />
          <h2>Register</h2>

          <form onSubmit={(event) => 
            authenticationHandler(event, fields, setIsAuthenticated, navigate)} 
          className="register-form">
            
            {registerFormFields.map(
                field => 
                  <Input key={field.fieldId} inputData={field} 
                    value={fields[field.fieldName]} onFieldChangeHandler={onFieldChangeHandler}
                  />
            )}

            <button type="submit">register</button>
            <p className="message">Already registered? <Link to="/login">Login</Link></p>
          </form>

        </div>
      </section>
    );
}