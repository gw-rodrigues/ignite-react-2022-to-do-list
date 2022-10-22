import { useState } from 'react';

import styles from './styles/App.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return <div className={styles.app}>tet</div>;
}
