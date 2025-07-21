import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>Understand how Pomodoro works</Link>
      <Link to='/'>
        Chronus Pomodoro &copy; {new Date().getFullYear()} - Made with 💚
      </Link>
    </footer>
  );
}
