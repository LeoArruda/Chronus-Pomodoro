import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function Countdown() {
  const taskContext = useContext(TaskContext);
  console.log(taskContext);

  return <div className={styles.container}>00:00</div>;
}
