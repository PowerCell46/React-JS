import { InputProps } from "../utils/interfaces";


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
