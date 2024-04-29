export default function FormSelectField({fieldName, onFieldChangeHandler, options}) {
    return (
        <div>
            <label htmlFor={fieldName}>Gender</label>
            <select onChange={(event) => onFieldChangeHandler(event, fieldName)} name={fieldName} id={fieldName}>
                <option value="">Not Selected</option>
                {options.map(option => 
                    <option key={option.name} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
}