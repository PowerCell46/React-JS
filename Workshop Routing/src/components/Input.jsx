export default function Input({field, fieldName, fieldType, placeholder, onFieldChangeHandler}) {
    return (
        <>
        <label htmlFor={field}>{fieldName}:</label>
        <input type={fieldType} id={field} name={field} placeholder={placeholder ? placeholder : ""}
        onChange={(event) => onFieldChangeHandler(event, field)}
        />
        </>
    )
}