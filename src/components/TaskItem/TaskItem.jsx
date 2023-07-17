import "./TaskItem.css"
function TaskItem({ task, onDelete }) {
    const handleDelete = () => {
      onDelete(task.id);
    };
  
    return (
      <div className='taskitem'>
        <span>{task.title}</span>
        <button onClick={handleDelete}>Удалить</button>
      </div>
    );
  }

  export default TaskItem;