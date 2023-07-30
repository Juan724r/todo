import React, { useState } from 'react';
import "./TaskItem.css";

function TaskItem({ task, onDelete, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title); // Добавляем состояние для хранения отредактированной задачи
  const [isButtonsVisible, setIsButtonsVisible] = useState(false); // Добавляем состояние для отслеживания открытости/закрытости кнопок редактирования

  const handleEditClick = () => {
    setIsEditing(true);
    setIsButtonsVisible(false); // Закрываем кнопки редактирования при открытии редактирования
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
  
  const handleButtonsToggle = () => {
    setIsButtonsVisible((prevIsButtonsVisible) => !prevIsButtonsVisible);
  };

  return (
    <div className={`taskitem ${isDeleting ? 'fade-out' : ''}`} onMouseEnter={handleButtonsToggle} onMouseLeave={handleButtonsToggle}>
      {isEditing ? (
        <input className="task" type="text" value={editedTitle} onChange={handleInputChange} />
      ) : (
        <input className="task" value={task.title} readOnly/>
      )}
      
      {isButtonsVisible && (
        <div className="edit-buttons">
          {isEditing ? (
            <a href="##" className="saveBtn" onClick={handleSaveClick}>✅</a>
          ) : (
            <>
              <a href="##" className="editBtn" onClick={handleEditClick}>✍️</a>
              <a href="##" className="deleteBtn" onClick={handleDelete}>🗑️</a>
            </>
          )}
        </div>
      )}
      
    </div>
  );
}

export default TaskItem;
