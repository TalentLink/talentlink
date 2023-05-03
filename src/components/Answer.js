import styles from './Answer.module.css';
import Link from 'next/link';

export default function Answer({ children, to }) {
  return (
    <Link href={to}>
      <button className={styles.answer}>{children}</button>
    </Link>
  );
}
