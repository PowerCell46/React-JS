import { useState } from "react";
import Input from "../components/Input";
import { gameHandler } from "../controllers/gamesController";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/TextArea";
import { gameFormFields } from "../utils/formFields";


export default function Create({setGames}) {
    const navigate = useNavigate();

    const [fields, setFields] = useState(gameFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {})  
    );
    
    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            gameFormFields.find(f => f.field === field).type === "number" ? 
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
                    
                    {gameFormFields
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

                    {gameFormFields
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