import { formField } from "../utils/formFields";


export interface InputProps {
    inputData: formField;
    value: string,
    onFieldChangeHandler: (fieldName: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
};


export default function Textarea({ inputData, value, onFieldChangeHandler }: InputProps) {
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