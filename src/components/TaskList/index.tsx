import { TaskListEmpty } from '../TaskListEmpty';
import { TaskListHeader } from '../TaskListHeader';
import { TaskListItems } from '../TaskListItems';
import styles from './style.module.css';

export function TaskList() {
  const isListEmpty = false;
  return (
    <main className={styles.taskList}>
      <TaskListHeader />

      {isListEmpty ? <TaskListEmpty /> : <TaskListItems />}
    </main>
  );
}
