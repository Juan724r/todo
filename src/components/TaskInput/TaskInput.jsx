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
        if (taskTitle.length <= 20){
          onAddTask(taskTitle);
          setTaskTitle('');
          setErrorMessage(null);
        }
        else {
          setErrorMessage('Максимальная длина - 20 символов');
        }
      }
    };
  
    const handleBlur = () => {
      if (errorMessage) {
        setTaskTitle('');
        setErrorMessage(null);
      }
    };

    const placeholderText = errorMessage ? errorMessage : 'Введите задачу';

    return (
      <div className='taskinput'>
        <input
          type="text"
          value={taskTitle}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholderText}
        />
        <a class="btn-9" onClick={handleAddTask}>Добавить</a>
      </div>
    );
  }

  export default TaskInput;