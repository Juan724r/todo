import React, { useState } from 'react';
import Header from './components/Header/Header';
import "./styles/App.css"
import "./styles/themes.css";
import Logo from './components/Logo/Logo';

import TaskList from './components/TaskList/TaskList';
import TaskInput from './components/TaskInput/TaskInput';

function App() {
  const [theme, setTheme] = useState('light');
  const [tasks, setTasks] = useState([]);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      setTheme('dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      setTheme('light');
    }
  };

  const addTask = (title) => {
    const newTask = { id: Date.now(), title };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <div className='tasks'>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
