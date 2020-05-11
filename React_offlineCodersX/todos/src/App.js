import React from 'react';
import './App.css';

function App() {
  const todos= ["Go Shopping", "Do Homework", "Wash Dishes", "Go to Market"]
  const todoList = todos.map(todo=> <li>{todo}</li>)
  return (
    <div className="App">
      <ul>
        {todoList}
      </ul>
    </div>
  );
}

export default App;
