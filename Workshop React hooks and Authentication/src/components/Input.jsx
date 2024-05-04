export default function Input({fieldName, fieldLabel, fieldType, placeholder, onFieldChangeHandler, value}) {
    return (
        <>
            <label htmlFor={fieldName}>{fieldLabel}:</label>
            <input type={fieldType} id={fieldName} name={fieldName} placeholder={placeholder ? placeholder : ""} defaultValue={value ? value : ""}
            onChange={(event) => onFieldChangeHandler(event, fieldName)}/>
        </>
    );
}