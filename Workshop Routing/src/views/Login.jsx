import { useState } from "react";
import Input from "../components/Input";
import { authenticationHandler } from "../controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import { loginFormFields } from "../utils/formFields";


export default function Login({setIsAuthenticated}) {
    const navigate = useNavigate();
    
    const [fields, setFields] = useState(loginFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})  
    );

    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            loginFormFields.find(f => f.field === field).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

    return (
        <section id="login-page" className="auth">
            <form onSubmit={(event) => authenticationHandler(event, fields, "Login", setIsAuthenticated, navigate)} id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    {loginFormFields.map(formField => <Input
                        key={formField.field}
                        field={formField.field}
                        fieldName={formField.fieldName}
                        fieldType={formField.type}
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