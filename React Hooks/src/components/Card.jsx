import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteTodo, editTodo } from '../controllers/todoController';
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';


function CardElement({todo}) {
  const {setTodos} = useContext(TodoContext);

  return (
    <Card style={{ width: '18rem', margin: "1rem" }}>
      <Card.Body>
        <Card.Title><p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.text}</p></Card.Title>
        <Button style={{margin: "1.5rem", backgroundColor: "red", border: "1px solid red"}} onClick={() => deleteTodo(todo._id, setTodos)}>Remove</Button>
        <Button onClick={() => editTodo(todo._id, todo, setTodos)}>{todo.isCompleted ? "Start Over" : "Finish"}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardElement;