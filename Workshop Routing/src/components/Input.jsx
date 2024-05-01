export default function Input({field, fieldName, fieldType, placeholder, onFieldChangeHandler, value}) {
    return (
        <>
            <label htmlFor={field}>{fieldName}:</label>
            <input type={fieldType} id={field} name={field} placeholder={placeholder ? placeholder : ""} value={value ? value : ""}
            onChange={(event) => onFieldChangeHandler(event, field)}
        />
        </>
    )
}