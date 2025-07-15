import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Understand how Pomodoro works</a>
      <a href=''>
        Chronus Pomodoro &copy; {new Date().getFullYear()} - Made with 💚
      </a>
    </footer>
  );
}
