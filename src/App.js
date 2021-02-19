import React, { useState } from 'react';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Make work', completed: true},
    {id: 2, title: 'Solve problem', completed: false},
    {id: 3, title: 'Cook food', completed: false}
  ])

  function handleToggle(id) {
    let newTodos = [...todos];
    setTodos(newTodos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    let newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.id !== id))
  }

  function createTodo(title) {
    let newTodos = todos.slice();
    setTodos([...newTodos, {
      id: Date.now(),
      title,
      completed: false
    }])
  }
  
  return (
    <Container fluid="md" className='mt-5'>
      <h1>You will must do:</h1>
      <TodoList todos={todos} handleToggle={handleToggle} handleClick={removeTodo} />
      <AddTodo onCreate={createTodo}/>
    </Container>
  );
}

export default App;
