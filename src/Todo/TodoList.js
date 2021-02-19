import React from 'react';
import TodoItem from './TodoItem';
import {ListGroup} from 'react-bootstrap';

export default function TodoList(props) {
  return (
    <ListGroup className='w-100 mt-5'>
      {props.todos.map((todo, index) => {
        return <TodoItem key={todo.id} item={todo} index={index} onChange={props.handleToggle} onClick={props.handleClick} />
      })}
    </ListGroup>
  )
}
