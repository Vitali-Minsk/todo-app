import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddTodo({onCreate}) {
  const [value, setValue] = useState('');

  function handleSubmit(e, value) {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <Form className='mt-3' onSubmit={(e) => handleSubmit(e, value)}>
      <Form.Group>
        <Form.Label>Add new task:</Form.Label>
          <Form.Control type='text' value={value} onChange={event => setValue(event.target.value)}/>
      </Form.Group>
        <Button type='submit'>Add</Button>
    </Form>
  )
}