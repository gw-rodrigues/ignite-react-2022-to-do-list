import { useState } from 'react';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import styles from './styles/App.module.css';

export type TTask = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([
    {
      id: 1,
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false,
    },
  ]);

  function handleCreateTasks(title: string) {
    const newTask: TTask = {
      id: tasks.length + 1,
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function handleCompleteTask(id: number) {
    const completedTask = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(completedTask);
  }

  function handleRemoveTask(id: number) {}

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
