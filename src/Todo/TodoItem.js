import React from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

export default function TodoItem({index, item: {id, title, completed}, onChange, onClick}) {
  
  let classCompleted = '';
  if (completed) {
    classCompleted = 'done';
  }
  
  return (
    <ListGroup.Item >
      
        <Form  className='d-flex justify-content-between'>
          <span className={classCompleted}>
          <Form.Label className='checkbox-other'>
            <Form.Check className='mr-2' type='checkbox' checked={completed} id='check-box' onChange={onChange.bind(null, id)}/>
          </Form.Label>
            {index + 1} {title}
          </span>
          <Button className='btn btn-close' onClick={onClick.bind(null, id)}>&times;</Button>
        </Form>
    </ListGroup.Item>
  )
}
