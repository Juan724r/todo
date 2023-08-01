import React, { useState } from 'react';
import "./TaskItem.css";

function TaskItem({ task, onDelete, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title); 
  const [isButtonsVisible, setIsButtonsVisible] = useState(false); 

  const handleEditClick = () => {
    setIsEditing(true);
    setIsButtonsVisible(false); 
  };

  const handleSaveClick = () => {
    onEditTask(task.id, editedTitle); 
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value); 
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(task.id);
    }, 300);
  };
  


  const handleButtonsState = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };

  // function moveCaretToEnd(inputObject){
  //   if (inputObject.selectionStart){
  //     var end = inputObject.value.length;
  //     inputObject.setSelectionRange(end,end);
  //     inputObject.focus();
  //   }
  // }

  return (
    <div className={`taskitem ${isDeleting ? 'fade-out' : ''}`} >
      {isEditing ? (
        <input className="task editing" type="text" value={editedTitle} onClick={handleButtonsState} onChange={handleInputChange} />
      ) : (
        <input className="task" value={task.title} readOnly onClick={handleButtonsState}/>
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
