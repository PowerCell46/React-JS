import { useState } from "react";
import Input from "../components/Input";
import { authenticationHandler } from "../controllers/authController";
import { Link, useNavigate } from "react-router-dom";
import { registerFormFields } from "../utils/formFields";


export default function Register({setIsAuthenticated}) {
    const navigate = useNavigate();
    
    const [fields, setFields] = useState(registerFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})
    );

    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            registerFormFields.find(f => f.field === field).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

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
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}