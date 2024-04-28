import { BASE_URL } from "./Main"

export default function ToDo(props) {
    return (
      <tr className={`todo ${props.isCompleted ? "is-completed" : ""}`}>
          <td>{props.text}</td>
          <td>{props.isCompleted ? "Incomplete" : "Complete"}</td>
          <td className="todo-action">
              <button onClick={() => updateTodo(props.id, !props.isCompleted, props.todos, props.setTodos)} className="btn todo-btn">Change status</button>
          </td>
      </tr>
    )
}


function updateTodo(todoId, newValue, todos, setTodos) {
  fetch(`${BASE_URL}/todos/${todoId}`, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify({isCompleted: newValue})})
  .then(response => {
     if (response.status === 200) {
        const updatedTodos = todos.map(todo => {
          if (todo._id === todoId) {
            return {...todo, isCompleted: newValue};
          }
          return todo;
        });
        setTodos(updatedTodos);

     } else {
      console.error(`Status Code: ${response.status}`);
     }
  })
  .catch(err => console.error(err));
}