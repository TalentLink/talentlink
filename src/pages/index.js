import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/Card';

import styles from '@/styles/Home.module.css';

function StartButton() {
  return (
    <Link href="/questionnaire" className={styles.startButton}>
      เริ่มเลย
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Card>
        <h1 className={styles.title}>คุณหมาะสมกับ role ไหน</h1>
        <h1 className={styles.subTitle}>ใน Tech industry ?</h1>
        <Image
          priority
          className={styles.image}
          src="/start.svg"
          alt="Questions"
          width={220}
          height={220}
        />
        <StartButton></StartButton>
      </Card>
    </>
  );
}
