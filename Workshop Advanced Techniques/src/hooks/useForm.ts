import { useState } from "react";
import { formField } from "../utils/formFields";


export default function useForm(formFields:formField[]) {
    type Fields = Record<string, string>;

    const [fields, setFields] = useState(formFields
        .map(f => f.fieldName)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {} as Fields)
    );
    
    function onFieldChangeHandler(event: React.ChangeEvent<HTMLInputElement>, fieldName: string) {
        // console.log(fieldName, event.target.value);
        
        setFields(prev => ({
            ...prev,
            [fieldName]: event.target.value
        }));
    }

    return {fields, onFieldChangeHandler};
}