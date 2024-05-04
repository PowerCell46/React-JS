export default function TextArea({fieldName, fieldLabel, value, onFieldChangeHandler}) {
    return (
        <>
            <label htmlFor={fieldName}>{fieldLabel}:</label>
            <textarea onChange={(event) => 
                onFieldChangeHandler(event, fieldName)} defaultValue={value ? value : ""} name={fieldName} id={fieldName}>
            </textarea>
        </>
    );
}