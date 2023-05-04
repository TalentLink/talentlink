import styles from './Answer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import tickIcon from '../assets/tick.svg';
import { useRouter } from 'next/router';

const Checkbox = () => {
  return (
    <div className={styles.checkbox}>
      <Image src={tickIcon} alt="checked" />
    </div>
  );
};

export default function Answer({ children, to, handleClick }) {
  const router = useRouter();

  const handleClickLink = (e) => {
    e.preventDefault();
    handleClick();
    setTimeout(() => {
      router.push(to);
    }, 100);
  };
  return (
    <Link href={to} className={styles.answer} onClick={handleClickLink}>
      <Checkbox></Checkbox>
      {children}
    </Link>
  );
}
