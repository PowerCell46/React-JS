export interface formField {
    fieldName: string,
    fieldId: string,
    fieldType: string, 
    placeholder: string
};


export const registerFormFields:formField[] = [
    {fieldName: "email", fieldId: "register-email", fieldType: "text", placeholder: "email"},
    {fieldName: "password", fieldId: "register-password", fieldType: "password", placeholder: "password"},
    {fieldName: "re-password", fieldId: "repeat-password", fieldType: "password", placeholder: "repeat password"}
];


export const loginFormFields:formField[] = [
    {fieldName: "email", fieldId: "email", fieldType: "text", placeholder: "email"},
    {fieldName: "password", fieldId: "password", fieldType: "password", placeholder: "password"}
];