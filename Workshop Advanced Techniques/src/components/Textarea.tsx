import { TextAreaProps } from "../utils/interfaces";


export default function Textarea({ inputData, value, onFieldChangeHandler }: TextAreaProps) {
    return (
        <textarea
            id={inputData.fieldId}
            name={inputData.fieldName}
            placeholder={inputData.placeholder}
            rows={2} 
            cols={10}
            onChange={(event) => onFieldChangeHandler(event, inputData.fieldName)}
            value={value}
        >
        </textarea>
    );
}