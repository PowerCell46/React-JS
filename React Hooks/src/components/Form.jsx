import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';
import { createTodo } from '../controllers/todoController';
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';


function FormComponent() {
  const {setTodos} = useContext(TodoContext);

  const {formValues, fieldChangeHandler, onSubmit} = useForm(
    {text: "", isCompleted: ""},
    (values, setFormValues) => {
      let {text, isCompleted} = values;
      isCompleted = isCompleted === "true";
      createTodo(text, isCompleted, setTodos, setFormValues, {text: "", isCompleted: ""});
    }
  );
    return (
    <Form onSubmit={onSubmit} style={{backgroundColor: "whitesmoke", width: "50%", margin: "0 auto", padding: "2rem"}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To-Do</Form.Label>
        <Form.Control onChange={fieldChangeHandler} type="text" name='text' placeholder="Enter todo" value={formValues.text} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Is Completed?</Form.Label>
        <Form.Control onChange={fieldChangeHandler} type="text" name='isCompleted' placeholder="true" value={formValues.isCompleted}/>
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