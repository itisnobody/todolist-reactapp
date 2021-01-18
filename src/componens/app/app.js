

import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list/todo-list";

import './app.css';

const App = () => {

  const todoData = [
    {
      label: 'Drink coffee',
      important: false,
      id: 1
    },
    {
      label: 'Make awesome App',
      important: true,
      id: 2
    },
    {
      label: 'Have a lunch',
      important: false,
      id: 3
    }
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo='3' done='1' />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;