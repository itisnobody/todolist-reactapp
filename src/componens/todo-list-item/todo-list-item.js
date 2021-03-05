import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label,
            onDeleted,
            onDone,
            onImportant,
            done,
            important} = this.props;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    } if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className='todo-list-item-label'
          onClick={onDone}>
          {label}
        </span>

        <button className='btn btn-outline-success btn-sm'
          type='button'
          onClick={onImportant}>
          <i className='fa fa-exclamation'></i>
        </button>

        <button className='btn btn-outline-danger btn-sm'
          type='button'
          onClick={onDeleted}>
          <i className='fa fa-trash-o'></i>
        </button>
      </span>
    );
  }
}