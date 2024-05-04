import Input from "../components/Input";
import { authenticationHandler } from "../controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import { registerFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";


export default function Register() {
    const {setIsAuthenticated} = useContext(AuthContext);
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
                        key={formField.fieldName}
                        fieldName={formField.fieldName}
                        fieldLabel={formField.fieldLabel}
                        fieldType={formField.fieldType}
                        placeholder={formField.placeholder}
                        onFieldChangeHandler={onFieldChangeHandler}
                    />)}

                    <input className="btn submit" type="submit" value="Register"/> 

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}