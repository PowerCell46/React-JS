import { formField } from "../utils/formFields";

export interface InputProps {
  inputData: formField;
  value: string,
  onFieldChangeHandler: (fieldName: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};


export default function Input({ inputData, value, onFieldChangeHandler }: InputProps) {
  return (
    <input
      type={inputData.fieldType}
      name={inputData.fieldName}
      id={inputData.fieldId}
      placeholder={inputData.placeholder}
      onChange={(event) => onFieldChangeHandler(event, inputData.fieldName)}
      value={value}
    />
  );
}
