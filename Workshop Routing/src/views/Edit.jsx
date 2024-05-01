import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { gameHandler, getSingleGame } from "../controllers/gamesController";
import Input from "../components/Input";
import TextArea from "../components/TextArea";


const editFormFields = [
    {field: "title", fieldName: "Legendary Title", type: "text", placeholder: "Enter game title..."},
    {field: "category", fieldName: "Category", type: "text", placeholder: "Enter game category..."},
    {field: "maxLevel", fieldName: "MaxLevel", type: "number", placeholder: "1"},
    {field: "imageUrl", fieldName: "Image", type: "text", placeholder: "Upload a photo"},
    {field: "summary", fieldName: "Summary", type: "textarea", placeholder: ""},
];


export default function Edit({setGames}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [game, setGame] = useState({});
    const location = useLocation();
    const [fields, setFields] = useState(editFormFields
        .map(f => f.field)
        .reduce((fields, f) => {
            fields[f] = "";
            return fields;
        }, {id})  
    );

    const data = location.state?.game;
   console.log(data);
    useEffect(() => {
        if (data) {
            setGame(data);

            editFormFields
                .forEach(field => 
                    setFields(prevVal => 
                            ({...prevVal, [field.field]: data[field.field]})
                        )
                );

        } else {
            getSingleGame(id)
            .then(data => {
                setGame(data);

                editFormFields
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
            editFormFields.find(f => f.field === field).type === "number" ? 
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

                        {editFormFields
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

                        {editFormFields
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