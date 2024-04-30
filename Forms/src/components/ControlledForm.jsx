import { useState } from "react";
import { registerValidator } from "../controlledFormValidator";


export default function ControlledForm({formRef}) {
    const [fields, setFields] = useState({
        username: "",
        password: "",
        age: ""
    });

    const [errors, setErrors] = useState({
        username: false,
        password: false,
        age: false
    });

    const [errorMessage, setErrorMessage] = useState("");
    
    const onFieldChangeHandler = (e, fieldName) => {
        const numberFields = ['age'];

        setFields(prev => ({...prev, 
            [fieldName]: 
            numberFields.includes(fieldName) ? // Number field 
                Number(e.target.value) 
            : // Not a Number field
                e.target.value
        }));
    }

    const onUsernameBlurHandler = (e, fieldName) => {
        const value = e.target.value;

        if (value === "") {
            return;
        }

        const validationResult = registerValidator[fieldName](value);
        
        if (validationResult !== true) {
            setErrors(prev => ({...prev, [fieldName]: true}));
            setErrorMessage(validationResult);

        } else {
            setErrors(prev => ({...prev, [fieldName]: false}));
            setErrorMessage("");
        }
    }

    function submitHandler(e) {
        e.preventDefault();

        console.log(fields);
    }

    return(
        <>
        
        <h1>Uncontrolled Form</h1>
        <form ref={formRef} onSubmit={submitHandler}>
        
            <div>
                <label htmlFor="username">Username:</label>
                <input className={errors.username ? "error" : ""} 
                onBlur={(event) => onUsernameBlurHandler(event, "username")} 
                onChange={(event) => onFieldChangeHandler(event, "username")}
                value={fields.username} type="text" name="username" id="username"/>
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input className={errors.password ? "error" : ""}
                onBlur={(event) => onUsernameBlurHandler(event, "password")}
                onChange={(event) => onFieldChangeHandler(event, "password")}
                value={fields.password} type="password" name="password" id="password"/>
            </div>

            <div>
                <label htmlFor="age">Age:</label>
                <input className={errors.age ? "error" : ""}
                onBlur={(event) => onUsernameBlurHandler(event, "age")}
                onChange={(event) => onFieldChangeHandler(event, "age")} 
                value={fields.age} type="number" name="age" id="age"/>
            </div>

            

        </form>

        {/* <button disabled={
                Object.values(errors).filter(e => e === true).length > 0 ||
                Object.values(fields).filter(f => f === "").length !== 0
            }>Register
        </button> */}

        {errorMessage.length > 0 ? <p>{errorMessage}</p> : null}

        </>
    )
}