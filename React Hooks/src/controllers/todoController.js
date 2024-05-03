const URL = `http://localhost:3030/jsonstore/todos`;


export function createTodo(text, isCompleted, setTodos, setFormValues, initialValues) {
    fetch(URL, {method: "POST",
    headers: {"Content-type": "application/json"}, 
    body: JSON.stringify({text, isCompleted})})
    .then(res => res.json())
    .then(data => {
        setTodos(prev => [...prev, data]);
        setFormValues(initialValues);
    })
    .catch(err => console.error(err));
}


export function deleteTodo(id, setTodos) {
    fetch(`${URL}/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setTodos(prev => prev.filter(todo => todo._id !== id));
    })
    .catch(err => console.error(err));
}

export function getAllTodos(setTodos) {
    fetch(URL)
    .then(res => res.json())
    .then(data => setTodos(Object.values(data)))
    .catch(err => console.error(err));
}


export function editTodo(id, todo, setTodos) {
    fetch(`${URL}/${id}`, {method: "PUT",
    headers: {"Content-type": "application/json"}, 
    body: JSON.stringify({...todo, isCompleted: !todo.isCompleted})})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setTodos(prev => prev.map(t => t._id === todo._id ? data : t));
    })
    .catch(err => console.error(err));
}