import styles from './Button.module.css';

export default function Button({ secondary = false, children }) {
  return (
    <button className={`${styles.button} ${secondary ? styles.secondary : ''}`}>
      {children}
    </button>
  );
}
