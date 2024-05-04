import { useState } from "react";


export default function useForm(formFields) {
    const [fields, setFields] = useState(formFields
        .map(f => f.fieldName)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})
    );

    function onFieldChangeHandler(event, fieldName) {
        setFields(prev => ({...prev, [fieldName]: 
            formFields.find(f => f.fieldName === fieldName).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

    return {fields, onFieldChangeHandler, setFields};
}