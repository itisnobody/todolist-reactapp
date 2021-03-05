import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list/todo-list";
import AddItem from '../add-item';

import './app.css';

export default class App extends React.Component {

  firstId = 1;
  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.firstId++
    }
  }

  toggleProperty(arr, id ,property) {
      const idx = arr.findIndex(el => el.id === id);

      const oldItem = arr[idx];
      const newItem = {
        ...oldItem,
        [property]: !oldItem[property]
      };

      const newArray = [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];

      return newArray;
  }

  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Make awesome App'),
        this.createTodoItem('Have a lunch')
      ],
      term: '',
      filter: 'all' // all, , active, done
    };

    this.addItem = text => {
      if (!text.length) {
        return this.state.todoData;
      }
      
      const newItem = this.createTodoItem(text);

      this.setState(({todoData}) => {
        const newArray = [
          ...todoData,
          newItem
        ];

        return {
          todoData: newArray
        };
      });
    };

    this.deleteItem = id => {
      this.setState(({todoData}) => {

        const idx = todoData.findIndex(el => el.id === id);
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        };
      });
    };

    this.onToggleImportant = id => {
      this.setState(({todoData})=> {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
      });
    };

    this.onToggleDone = id => {
      this.setState(({todoData})=> {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        };
      });
    };

    this.onSearchChange = term => {
      this.setState({term});
    }

    this.onToggleFilter = filter => {
      this.setState({filter});
    }

    this.search = (array, term) => {
      if (term.length === 0) {
        return array;
      }
      return array.filter(item => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    };

    this.filter = (array, status) => {
      switch (status) {
        case 'all':
          return array;
        case 'active':
          return array.filter(item => !item.done);
        case 'done':
          return array.filter(item => item.done);
        default:
          return array;
      }
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader
          toDo={todoCount}
          done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel
            search={this.onSearchChange}/>
          <ItemStatusFilter
            onToggleFilter={this.onToggleFilter}
            active={filter} />
        </div>
        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone} />
        <AddItem
          onAdd={this.addItem} />
      </div>
    );
  }
}
