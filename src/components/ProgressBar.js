import styles from './ProgressBar.module.css';

export default function ProgressBar({ count, maxCount = 8 }) {
  const progress = Math.min(count / maxCount, 1);
  return (
    <div className={styles.progressBarOuter}>
      <div
        className={styles.progressBarInner}
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
