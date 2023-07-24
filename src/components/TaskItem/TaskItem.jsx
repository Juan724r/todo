import "./TaskItem.css"
import React, { useState } from 'react';

function TaskItem({ task, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(task.id);
    }, 300);
  };
  
    return (
      <div className={`taskitem ${isDeleting ? 'fade-out' : ''}`}>
        <span className="task">{task.title}</span>
        <a href="#" className="deleteBtn" onClick={handleDelete}>Удалить</a>
      </div>
    );
  }

  export default TaskItem;