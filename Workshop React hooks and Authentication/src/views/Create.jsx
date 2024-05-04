import Input from "../components/Input";
import { gameHandler } from "../controllers/gamesController";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/TextArea";
import { gameFormFields } from "../utils/formFields";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import { GamesContext } from "../contexts/gamesContext";


export default function Create() {
    const {setGames} = useContext(GamesContext);
    const navigate = useNavigate();

    const {fields, onFieldChangeHandler} = useForm(gameFormFields);

    return (
        <section id="create-page" className="auth">
            <form onSubmit={(event) => gameHandler(event, fields, "Create", setGames, navigate)} id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    
                    {gameFormFields
                    .filter(f => f.fieldType !== "textarea")
                    .map(formField => 
                        <Input 
                        key={formField.fieldName}
                        fieldName={formField.fieldName}
                        fieldLabel={formField.fieldLabel}
                        fieldType={formField.fieldType}
                        placeholder={formField.placeholder}
                        onFieldChangeHandler={onFieldChangeHandler}
                        />
                    )}

                    {gameFormFields
                    .filter(f => f.fieldType === "textarea")
                    .map(formField => 
                        <TextArea 
                            key={formField.fieldName}
                            fieldName={formField.fieldName}
                            fieldLabel={formField.fieldLabel}
                            onFieldChangeHandler={onFieldChangeHandler}
                        />
                    )}
                    
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}