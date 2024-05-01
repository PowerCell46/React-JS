import { useState } from "react";
import Input from "../components/Input";
import { gameHandler } from "../controllers/gamesController";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/TextArea";


const createFormFields = [
    {field: "title", fieldName: "Legendary Title", type: "text", placeholder: "Enter game title..."},
    {field: "category", fieldName: "Category", type: "text", placeholder: "Enter game category..."},
    {field: "maxLevel", fieldName: "MaxLevel", type: "number", placeholder: "1"},
    {field: "imageUrl", fieldName: "Image", type: "text", placeholder: "Upload a photo"},
    {field: "summary", fieldName: "Summary", type: "textarea", placeholder: ""},
];


export default function Create({setGames}) {
    const navigate = useNavigate();
    const [fields, setFields] = useState(createFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})  
    );
    

    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            createFormFields.find(f => f.field === field).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={(event) => gameHandler(event, fields, "Create", setGames, navigate)} id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    
                    {createFormFields
                    .filter(f => f.type !== "textarea")
                    .map(formField => 
                        <Input
                            key={formField.field}
                            field={formField.field}
                            fieldName={formField.fieldName}
                            fieldType={formField.type}
                            placeholder={formField.placeholder}
                            value={fields[formField.field]}
                            onFieldChangeHandler={onFieldChangeHandler}
                        />
                    )}

                    {createFormFields
                    .filter(f => f.type === "textarea")
                    .map(formField => 
                        <TextArea 
                            key={formField.field}
                            field={formField.field}
                            fieldName={formField.fieldName}
                            onFieldChangeHandler={onFieldChangeHandler}
                        />
                    )}
                    
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}