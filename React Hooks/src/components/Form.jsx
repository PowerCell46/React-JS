import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FormComponent() {
    const [fields, setFields] = useState({});
    useEffect(() => {
        setFields({text: "", isCompleted: ""})
    }, []);
    
    function submitFormHandler(event) {
        event.preventDefault();
        console.log(fields);
    }

    function fieldChange(event) {
        setFields(prev => ({...prev, [event.target.name]: event.target.value}))
    }


    return (
    <Form onSubmit={(event) => submitFormHandler(event)} style={{backgroundColor: "whitesmoke", width: "50%", margin: "0 auto", padding: "2rem"}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To-Do</Form.Label>
        <Form.Control onChange={fieldChange} type="text" name='text' placeholder="Enter todo" value={fields.text} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Is Completed?</Form.Label>
        <Form.Control onChange={fieldChange} type="text" name='isCompleted' placeholder="true" value={fields.isCompleted}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;