import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { gameHandler, getSingleGame } from "../controllers/gamesController";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { gameFormFields } from "../utils/formFields";


export default function Edit({setGames}) {
    const {id} = useParams();

    const [game, setGame] = useState({});
    const [fields, setFields] = useState(gameFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {id})  
    );

    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state?.game;

    useEffect(() => {
        if (data) {
            setGame(data);

            gameFormFields
                .forEach(field => 
                    setFields(prevVal => 
                            ({...prevVal, [field.field]: data[field.field]})
                        )
                );

        } else {
            getSingleGame(id)
            .then(data => {
                setGame(data);

                gameFormFields
                .forEach(field => 
                    setFields(prevVal => 
                            ({...prevVal, [field.field]: data[field.field]})
                        )
                );
            })
            .catch(err => console.error(err)); // notify the user
        }
    }, []);

    function onFieldChangeHandler(event, field) {
        setFields(prev => ({...prev, [field]: 
            gameFormFields.find(f => f.field === field).type === "number" ? 
                Number(event.target.value) 
            :
                event.target.value
        }));
    }

    return (
        <section id="edit-page" className="auth">
                <form onSubmit={(event) => gameHandler(event, fields, "Edit", setGames, navigate)} id="edit">
                    <div className="container">

                        <h1>Edit Game</h1>

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
                                value={fields[formField.field]}
                                onFieldChangeHandler={onFieldChangeHandler}
                            />
                        )}
                        
                        <input className="btn submit" type="submit" value="Edit Game"/>
                    </div>
                </form>
            </section>
    );
}