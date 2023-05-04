import styles from './Card.module.css';

export default function Card({ children }) {
  return <article className={styles.card}>{children}</article>;
}
