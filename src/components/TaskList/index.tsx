import { TaskListHeader } from '../TaskListHeader';
import styles from './style.module.css';
export function TaskList() {
  return (
    <main className={styles.taskList}>
      <TaskListHeader />
    </main>
  );
}
