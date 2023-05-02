import styles from './Answer.module.css';

export default function Answer({ children }) {
  return <button className={styles.answer}>{children}</button>;
}
