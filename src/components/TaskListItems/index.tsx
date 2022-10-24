import { Trash } from 'phosphor-react';
import styles from './style.module.css';

export function TaskListItems() {
  return (
    <ul className={styles.taskListItems}>
      <li>
        <input type="checkbox" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <button>
          <Trash size={16} />
        </button>
      </li>
    </ul>
  );
}
