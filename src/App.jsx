import { useState } from 'react';
import Todos from './Components/Todos';
import './App.css';
import todo from './data';

function App() {
  const [todos, setTodos] = useState(todo);
  const [task, setTask] = useState(''); 

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() !== '') { 
      setTodos((prev) => [...prev, { task }]);
    }
    setTask(''); 
  };

  return (
    <div className='container'>
      <h1 className='header'>Create your Todo-List</h1>
      <div className='inp'>
        <input
          type='text'
          placeholder='What are your tasks for today?'
          value={task} 
          onChange={handleChange}
          className='int' />
        <button className='btn' onClick={handleClick}>Add</button>
      </div>
      <Todos todos={todos} setTodos={setTodos} setTask={setTask} task={task} />
    </div>
  );
}

export default App;
