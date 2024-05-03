import { useState } from 'react'
// import './App.css'
import Button from 'react-bootstrap/Button';

import Navigation from './components/Navigation'
import CardElement from './components/Card'
import FormComponent from './components/Form';
import { getAllTodos } from './controllers/todoController';
import { TodoContext } from './contexts/todoContext';


function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useState(() => {
    getAllTodos(setTodos);
  }, []);

  const contextValues = {
    setTodos,
    name: "Peter"
  };

  return (
    <>
      <Navigation/>

      <TodoContext.Provider value={contextValues}>
  
          <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
              {todos.map(todo => <CardElement key={todo._id} todo={todo}/>)}
          </div>

      <Button style={{ margin: "3.5rem"}} variant="primary" onClick={() => setShowForm((prev) => !prev)}>{showForm ? "Hide" : "Show"} Add To-Do</Button>
      
          {showForm ? <FormComponent/> : null}
          
      </TodoContext.Provider>

    </>
  )
}

export default App
