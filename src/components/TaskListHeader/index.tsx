import styles from './style.module.css';

interface ITaskListHeader {
  totalTasks: number;
  totalTasksCompleted: number;
}
export function TaskListHeader({
  totalTasks,
  totalTasksCompleted,
}: ITaskListHeader) {
  return (
    <header className={styles.taskListHeader}>
      <div>
        Tarefas criadas <span>{totalTasks}</span>
      </div>
      <div>
        Concluídas<span>{totalTasksCompleted}</span>
      </div>
    </header>
  );
}
