import styles from './Answer.module.css';
import Link from 'next/link';

const Checkbox = () => {
  return <div className={styles.checkbox}></div>;
};

export default function Answer({ children, to }) {
  return (
    <Link href={to} className={styles.answer}>
      <Checkbox></Checkbox>
      {children}
    </Link>
  );
}
