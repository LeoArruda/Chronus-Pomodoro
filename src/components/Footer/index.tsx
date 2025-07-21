import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Understand how Pomodoro works
      </RouterLink>
      <RouterLink href='/'>
        Pomodorus Chronus &copy; {new Date().getFullYear()} - Made with 💚
      </RouterLink>
    </footer>
  );
}
