import "./TaskList.css"
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onDeleteTask }) {
    return (
      <div className='tasklist'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
        ))}
      </div>
    );
  }

  export default TaskList;