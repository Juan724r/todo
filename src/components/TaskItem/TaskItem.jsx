import "./TaskItem.css"
import React, { useState } from 'react';

function TaskItem({ task, onDelete, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title); // Добавляем состояние для хранения отредактированной задачи

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditTask(task.id, editedTitle); // Передаем отредактированный заголовок задачи вместо editedTask
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value); // Обновляем состояние editedTitle при изменении значения в поле ввода
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(task.id);
    }, 300);
  };
  
  return (
    <div className={`taskitem ${isDeleting ? 'fade-out' : ''}`}>

      {isEditing ? (
        <input className="task" type="text" value={editedTitle} onChange={handleInputChange} />
      ) : (
        <input className="task" value={task.title} readOnly/>
      )}
      
        {isEditing ? (
          <a href="##" className="saveBtn" onClick={handleSaveClick}>✅</a>
        ) : (
          <>
            <a href="##" className="editBtn" onClick={handleEditClick}>✍️</a>
            <a href="##" className="deleteBtn" onClick={handleDelete}>🗑️</a>
          </>
        )}
      
    </div>
  );
}

export default TaskItem;
