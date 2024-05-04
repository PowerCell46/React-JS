import { useContext } from "react";
import Input from "../components/Input";
import { authenticationHandler } from "../controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import { loginFormFields } from "../utils/formFields";
import { AuthContext } from "../contexts/authContext";
import useForm from "../hooks/useForm";


export default function Login() {
const {setIsAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const {fields, onFieldChangeHandler} = useForm(loginFormFields);

    return (
        <section id="login-page" className="auth">
            <form onSubmit={(event) => authenticationHandler(event, fields, "Login", setIsAuthenticated, navigate)} id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    {loginFormFields.map(formField => 
                    <Input 
                        key={formField.fieldName}
                        fieldName={formField.fieldName}
                        fieldLabel={formField.fieldLabel}
                        fieldType={formField.fieldType}
                        placeholder={formField.placeholder}
                        onFieldChangeHandler={onFieldChangeHandler}
                    />)}

                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}