import Input from "../components/Input";
import { authenticationHandler } from "../controllers/authController";
import { useNavigate } from "react-router-dom";
import { registerFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";


export default function Register({setIsAuthenticated}) {
    const navigate = useNavigate();
    
    const {fields, onFieldChangeHandler} = useForm(registerFormFields);

    return (
        <section id="register-page" className="content auth">
            <form onSubmit={(event) => authenticationHandler(event, fields, "Register", setIsAuthenticated, navigate)} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    {registerFormFields.map(formField => 
                    <Input 
                        key={formField.field}
                        field={formField.field}
                        fieldType={formField.type}
                        placeholder={formField.placeholder}
                        fieldName={formField.fieldName}
                        onFieldChangeHandler={onFieldChangeHandler}
                    />)}

                    <input className="btn submit" type="submit" value="Register"/> 

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}