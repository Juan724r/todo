import "./TaskList.css"
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  
    return (
      <div className='tasklist'>
        {tasks.map((task) => (
          <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDeleteTask} 
          onEditTask={onEditTask}
          />
        ))}
      </div>
    );
  }

  export default TaskList;