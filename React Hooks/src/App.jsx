import { useState } from 'react'
// import './App.css'
import Button from 'react-bootstrap/Button';

import Navigation from './components/Navigation'
import CardElement from './components/Card'
import FormComponent from './components/Form';

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useState(() => {
    const URL = `http://localhost:3030/jsonstore/todos`;
    fetch(URL)
    .then(res => res.json())
    .then(data => setTodos(Object.values(data)))
    .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navigation/>

      <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      {/* {todos.map(todo => <CardElement key={todo._id} todo={todo}/>)} */}
      </div>

      <Button style={{margin: "1rem", margin: "1rem auto"}} variant="primary" onClick={() => setShowForm((prev) => !prev)}>{showForm ? "Hide" : "Show"} Add To-Do</Button>
            
      {showForm ? <FormComponent/> : null}
    </>
  )
}

export default App
