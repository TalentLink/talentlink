import Image from 'next/image';

import tickIcon from '../assets/tick.svg';
import styles from './Answer.module.css';

function Checkbox() {
  return (
    <div className={styles.checkbox}>
      <Image src={tickIcon} alt="checked" />
    </div>
  );
}

export default function Answer({ children, onClick }) {
  return (
    <div className={styles.answer} onClick={onClick}>
      <Checkbox></Checkbox>
      {children}
    </div>
  );
}
