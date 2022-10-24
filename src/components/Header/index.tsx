import { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import Logo from '/logo.svg';
import styles from './style.module.css';

interface IHeader {
  handleCreateTasks: (title: string) => void;
}

export function Header({ handleCreateTasks }: IHeader) {
  const [newTask, setNewTask] = useState('');

  function handleInputChange(element: ChangeEvent<HTMLInputElement>) {
    setNewTask(element.target.value);
  }

  function handleFormSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
    handleCreateTasks(newTask);
    setNewTask('');
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Rocket Logo" />
        <h1>
          to<span>do</span>
        </h1>
      </div>

      <form onSubmit={handleFormSubmit} className={styles.newTaskBar}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleInputChange}
          value={newTask}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </header>
  );
}
