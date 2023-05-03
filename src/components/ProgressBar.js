import styles from './ProgressBar.module.css';

export default function ProgressBar({ count, maxCount = 8 }) {
  const progress = Math.min(count / maxCount, 1);
  return (
    <div
      className={styles.progressBar}
      style={{ width: `${progress * 100}%` }}
    />
  );
}
