import { useState } from 'react';
import { TTask } from '../../App';
import { TaskListEmpty } from '../TaskListEmpty';
import { TaskListHeader } from '../TaskListHeader';
import { TaskListItems } from '../TaskListItems';
import styles from './style.module.css';

interface ITaskList {
  tasks: TTask[];
  handleCompleteTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export function TaskList({
  tasks,
  handleCompleteTask,
  handleRemoveTask,
}: ITaskList) {
  const isListEmpty = tasks.length === 0;

  return (
    <main className={styles.taskList}>
      <TaskListHeader />
      {isListEmpty ? (
        <TaskListEmpty />
      ) : (
        <ul className={styles.taskListItems}>
          {tasks.map((task) => (
            <TaskListItems
              key={task.id}
              task={task}
              handleCompleteTask={handleCompleteTask}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
