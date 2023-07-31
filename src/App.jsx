import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import "./styles/App.css"
import "./styles/themes.css";

import Logo from './components/Logo/Logo';
import TaskList from './components/TaskList/TaskList';
import TaskInput from './components/TaskInput/TaskInput';

function App() {
  const [theme, setTheme] = useState('light');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
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

  const EditTask = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Logo/>
      <div className='tasks'>
        <TaskInput onAddTask={addTask} />
        <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask} 
        onEditTask={EditTask}
        />
      </div>
    </div>
  );
}

export default App;
