import { useState } from "react";


export default function useForm(formFields) {
    const [fields, setFields] = useState(formFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})
    );

    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            formFields.find(f => f.field === field).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

    return {fields, onFieldChangeHandler};
}