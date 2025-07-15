import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log('Theme has changed', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Look, this component will be refreshed');
    };
  }, [theme]); // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <a>
        <h1>{theme}</h1>
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Go to Home page'
        title='Go to Home page'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Check History'
        title='Check History'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Go to Settings'
        title='Go to Settings'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Switch Theme'
        title='Switch Theme'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
