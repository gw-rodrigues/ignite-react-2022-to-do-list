import { Trash } from 'phosphor-react';
import { TTask } from '../../App';
import styles from './style.module.css';

interface ITaskListItems {
  task: TTask;
  handleCompleteTask: (id: string) => void;
  handleRemoveTask: (id: string) => void;
}

export function TaskListItems({
  task,
  handleCompleteTask,
  handleRemoveTask,
}: ITaskListItems) {
  return (
    <li className={styles.taskListItem}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => {
          handleCompleteTask(task.id);
        }}
      />
      <p className={task.isCompleted ? styles.completed : ''}>{task.title}</p>
      <button
        onClick={() => {
          handleRemoveTask(task.id);
        }}
      >
        <Trash size={16} />
      </button>
    </li>
  );
}
