import { ClipboardText } from 'phosphor-react';
import styles from './style.module.css';

export function TaskListEmpty() {
  return (
    <div className={styles.taskListEmpty}>
      <ClipboardText size={56} weight="thin" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
