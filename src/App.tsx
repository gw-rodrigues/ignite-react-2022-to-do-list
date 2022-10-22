import { useState } from 'react';

import { Header } from './components/Header';

import styles from './styles/App.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return <Header />;
}
