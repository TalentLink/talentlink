import Link from 'next/link';
import Image from 'next/image';

import Card from '@/components/Card';
import styles from '@/styles/Home.module.css';

function StartButton() {
  return (
    <Link href="/question/question-0" className={styles.startButton}>
      เริ่มเลย
    </Link>
  );
}

function Shadow() {
  return <div className={styles.shadow}></div>;
}

export default function Home() {
  return (
    <>
      <Card>
        <h1 style={{ fontSize: '1.7rem' }}>คุณหมาะสมกับ role ไหน</h1>
        <h1 style={{ fontSize: '1.55rem' }}>ใน Tech industry ?</h1>
        <Image
          priority
          style={{
            alignSelf: 'center',
          }}
          src="/start.svg"
          alt="Questions"
          width={220}
          height={220}
        />
        <StartButton></StartButton>
        <Shadow></Shadow>
      </Card>
    </>
  );
}
