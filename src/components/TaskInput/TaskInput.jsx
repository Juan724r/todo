import "./TaskInput.css"
import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleInputChange = (e) => {
      setTaskTitle(e.target.value);
    };
  
    const handleAddTask = () => {
      if (taskTitle.trim()) {
        if (taskTitle.length <= 50){
          onAddTask(taskTitle);
          setTaskTitle('');
          setErrorMessage(null);
        }
        else {
          setErrorMessage('Максимальная длина - 50 символов');
        }
      }
    };
  
    const handleBlur = () => {
      if (errorMessage) {
        setTaskTitle('');
        setErrorMessage(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleAddTask();
      }
    };

    const placeholderText = errorMessage ? errorMessage : 'Введите задачу';

    return (
      <div className='taskinput'>
        <input
          className="inputfield"
          type="text"
          value={taskTitle}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
        />
        <a href="#" className="btn-9" onClick={handleAddTask}>Добавить</a>
      </div>
    );
  }

  export default TaskInput;