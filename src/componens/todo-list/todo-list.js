import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = props => {
  const { todos,
          onDelete,
          onImportant,
          onDone } = props;

  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li className='list-group-item'
          key={id}>
        <TodoListItem
          { ...itemProps }
          onDeleted={()=> onDelete(id)}
          onImportant={()=>onImportant(id)}
          onDone={()=>onDone(id)} />
      </li>
    );
  });

  return (
    <ul className='todo-list list-group'>
      { elements }
    </ul>
  );
};

export default TodoList;