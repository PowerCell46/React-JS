export default function TextArea({field, fieldName, value, onFieldChangeHandler}) {
    return (
        <>
            <label htmlFor={field}>{fieldName}:</label>
            <textarea onChange={(event) => 
                onFieldChangeHandler(event, field)} defaultValue={value ? value : ""} name={field} id={field}>
            </textarea>
        </>
    );
}