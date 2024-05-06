import { formField } from "./interfaces";


export const registerFormFields:formField[] = [
    {fieldName: "email", fieldId: "register-email", fieldType: "text", placeholder: "email"},
    {fieldName: "password", fieldId: "register-password", fieldType: "password", placeholder: "password"},
    {fieldName: "re-password", fieldId: "repeat-password", fieldType: "password", placeholder: "repeat password"}
];


export const loginFormFields:formField[] = [
    {fieldName: "email", fieldId: "email", fieldType: "text", placeholder: "email"},
    {fieldName: "password", fieldId: "password", fieldType: "password", placeholder: "password"}
];


export const solutionsFormFields:formField[] = [
    {fieldName: "type", fieldId: "type", fieldType: "text", placeholder: "Solution Type"},
    {fieldName: "image-url", fieldId: "image-url", fieldType: "text", placeholder: "Image URL"},
    {fieldName: "description", fieldId: "description", fieldType: "textarea", placeholder: "Description"},
    {fieldName: "more-info", fieldId: "more-info", fieldType: "textarea", placeholder: "more Info" }
];
