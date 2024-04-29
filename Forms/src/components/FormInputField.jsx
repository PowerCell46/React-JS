export default function FormInputField({fieldName, fieldType, onFieldBlurHandler, onFieldChangeHandler, errors, fields}) {
    return (
        <div>
            <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:</label>
            <input className={errors[fieldName] ? "error" : ""} 
            onBlur={(event) => onFieldBlurHandler(event, fieldName)} 
            onChange={(event) => onFieldChangeHandler(event, fieldName)}
            value={fields[fieldName]} type={fieldType} name={fieldName} id={fieldName}/>
        </div>
    );
}