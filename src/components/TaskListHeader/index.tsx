import styles from './style.module.css';
export function TaskListHeader() {
  return (
    <header className={styles.taskListHeader}>
      <div>
        Tarefas criadas <span>0</span>
      </div>
      <div>
        Concluídas<span>0</span>
      </div>
    </header>
  );
}
