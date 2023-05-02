import styles from './Card.module.css';

export default function Card({ children }) {
  return (
    <article className={styles.card}>
      <h5 className={styles.info}>Select an answer</h5>
      <section>{children}</section>
    </article>
  );
}
