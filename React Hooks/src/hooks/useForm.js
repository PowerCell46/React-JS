import { useState } from "react";


export function useForm(initialValues, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialValues);

    function fieldChangeHandler(event) {
        setFormValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValues, setFormValues);
        }
    }
    

    return {formValues, fieldChangeHandler, onSubmit};
}
