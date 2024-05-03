import Input from "../components/Input";
import { gameHandler } from "../controllers/gamesController";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/TextArea";
import { gameFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";


export default function Create({setGames}) {
    const navigate = useNavigate();

    const {fields, onFieldChangeHandler} = useForm(gameFormFields);

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