import styles from './style.module.css';

import Logo from '/logo.svg';
import { PlusCircle } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Rocket Logo" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
      <div className={styles.newTaskBar}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </header>
  );
}
