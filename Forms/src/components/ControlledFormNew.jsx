import { useState } from "react";
import { registerValidator } from "../controlledFormValidator";
import FormInputField from "./FormInputField";
import FormSelectField from "./FormSelectField";

const FORM_FIELDS = [
    {fieldName: "username", fieldType: "text"},
    {fieldName: "email", fieldType: "text"},
    {fieldName: "password", fieldType: "password"},
    {fieldName: "age", fieldType: "number"},
    {fieldName: "gender", fieldType: "select", options: [{value: "M", name: "Male"}, {value: "F", name: "Female"}]}
];

export default function ControlledFormNew() {
    const [fields, setFields] = useState(FORM_FIELDS.map(field => field.fieldName).reduce((fields, field) => {
        fields[field] = "";
        return fields;
    }, {}));

    const [errors, setErrors] = useState(FORM_FIELDS.map(field => field.fieldName).reduce((fields, field) => {
        fields[field] = false;
        return fields;
    }, {}));

    const [errorMessage, setErrorMessage] = useState("");
    
    const onFieldChangeHandler = (e, fieldName) => {
        setFields(prev => ({...prev, 
            [fieldName]: 
            FORM_FIELDS.find(field => field.fieldName === fieldName).fieldType === "number" ?
                Number(e.target.value) 
            : // Not a Number field
                e.target.value
        }));
    }

    const onFieldBlurHandler = (e, fieldName) => {
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
        
        <form onSubmit={submitHandler}>
        
            {FORM_FIELDS.map(fieldData => {
                if (fieldData.fieldType === "select") {
                    return <FormSelectField
                    key={fieldData.fieldName}
                    fieldName={fieldData.fieldName}
                    onFieldChangeHandler={onFieldChangeHandler}
                    options={fieldData.options}
                    />

                } else {
                    return <FormInputField 
                    key={fieldData.fieldName}
                    fieldName={fieldData.fieldName}
                    fieldType={fieldData.fieldType}
                    onFieldBlurHandler={onFieldBlurHandler}
                    onFieldChangeHandler={onFieldChangeHandler}
                    errors={errors}
                    fields={fields}
                    />
                }
            }
            )}

            <button disabled={
                Object.values(errors).filter(e => e === true).length > 0 ||
                Object.values(fields).filter(f => f === "").length !== 0
            }>Register</button>

        </form>
        
        {errorMessage.length > 0 ? <p>{errorMessage}</p> : null}

        </>
    )
}