import { useEffect, useState } from "react"
import ToDo from "./ToDo";

export const BASE_URL = 'http://localhost:3030/jsonstore';

export default function Main() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        fetch(`${BASE_URL}/todos`)
        .then(response => response.json())
        .then(data => {
            setTodos(Object.values(data))})
        .catch(err => console.error(err));
    }, []);
    
    return (
        <main className="main">

  <section className="todo-list-container">
    <h1>Todo List</h1>

    <div className="add-btn-container">
      <button onClick={() => addTodo(todos, setTodos)} className="btn">+ Add new Todo</button>
    </div>

    <div className="table-wrapper">

      {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
      {/* <div className="loading-container">
        <div className="loading-spinner">
          <span className="loading-spinner-text">Loading</span>
        </div>
      </div> */}


      <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>

        {todos.map((todo) => 
            <ToDo key={todo._id} isCompleted={todo.isCompleted} text={todo.text} id={todo._id} todos={todos} setTodos={setTodos}/>
        )}

        </tbody>
      </table>
    </div>
  </section>
</main>
    )
}


function addTodo(todos, setTodos) {
    fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: "Go to the GYM!", isCompleted: false})}
    )
    .then(response => response.json())
    .then(data => {
        setTodos([...todos, data]);
    })
    .catch(err => console.error(err));
}