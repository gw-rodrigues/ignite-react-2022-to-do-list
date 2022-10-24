import { useState } from 'react';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import styles from './styles/App.module.css';

export type TTask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([
    {
      id: '1',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
    {
      id: '2',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
    {
      id: '3',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
    {
      id: '4',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    },
    {
      id: '5',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    },
  ]);

  /**
   * temp ids
   */
  const [tempId, setTempId] = useState(String(tasks.length));

  function handleCreateTasks(title: string) {
    /**
     * temp id
     */
    const newId = tempId + 1;
    setTempId(newId);

    const newTask: TTask = {
      id: newId,
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleCompleteTask(id: string) {
    const completedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(completedTasks);
  }

  function handleRemoveTask(id: string) {
    const removedTasks = tasks.filter((task) => {
      if (task.id !== id) return task;
    });
    setTasks(removedTasks);
  }

  return (
    <div className={styles.container}>
      <Header handleCreateTasks={handleCreateTasks} />
      <TaskList
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
}
