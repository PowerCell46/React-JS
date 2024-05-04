import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { gameHandler, getSingleGame } from "../controllers/gamesController";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { gameFormFields } from "../utils/formFields";
import { GamesContext } from "../contexts/gamesContext";
import useForm from "../hooks/useForm";


export default function Edit() {
    const {setGames} = useContext(GamesContext);
    const {id} = useParams();

    const [game, setGame] = useState({}); // State for the Game that is going to be Edited
    const {fields, onFieldChangeHandler, setFields} = useForm(gameFormFields);

    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state?.game;

    useEffect(() => {
        if (data) {
            setGame(data);

            gameFormFields
                .forEach(field => 
                    setFields(prevVal => 
                            ({...prevVal, [field.fieldName]: data[field.fieldName]})
                        )
                );

        } else {
            getSingleGame(id)
            .then(data => {
                setGame(data);

                gameFormFields
                .forEach(field => 
                    setFields(prevVal => 
                            ({...prevVal, [field.fieldName]: data[field.fieldName]})
                        )
                );
            })
            .catch(err => {
                console.error(err.code, err.message);
            });
        }
    }, []);

    return (
        <section id="edit-page" className="auth">
                <form onSubmit={(event) => gameHandler(event, fields, "Edit", setGames, navigate)} id="edit">
                    <div className="container">

                        <h1>Edit Game</h1>

                        {gameFormFields
                        .filter(f => f.fieldType !== "textarea")
                        .map(formField => 
                            <Input
                                key={formField.fieldName}
                                fieldName={formField.fieldName}
                                fieldLabel={formField.fieldLabel}
                                fieldType={formField.fieldType}
                                placeholder={formField.placeholder}
                                value={fields[formField.fieldName]}
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
                                value={fields[formField.fieldName]}
                                onFieldChangeHandler={onFieldChangeHandler}
                            />
                        )}
                        
                        <input className="btn submit" type="submit" value="Edit Game"/>
                    </div>
                </form>
            </section>
    );
}