import { Link } from "react-router-dom";
import Input from "../components/Input";
import { loginFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";
import { authenticationHandler } from "../controllers/authController";


export default function Login() {
  const {fields, onFieldChangeHandler} = useForm(loginFormFields);

    return (
        <section id="login">
        <div className="form">
          <img className="border" src="./images/border.png" alt="" />
          <h2>Login</h2>

          <form onSubmit={(event) => authenticationHandler(event, fields, "Login")} className="login-form">

            {loginFormFields.map(
                field => 
                  <Input key={field.fieldId} inputData={field}
                    value={fields[field.fieldName]} onFieldChangeHandler={onFieldChangeHandler}
                  />
            )}

            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>

        </div>
      </section>
    );
}