import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/Card';

import { label } from '@/data/label';

import styles from '@/styles/Home.module.css';

function StartButton() {
  return (
    <Link href="/questionnaire" className={styles.startButton}>
      {label.startButton}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Card>
        <h1 className={styles.title}>{label.appTitle}</h1>
        <Image
          priority
          className={styles.image}
          src="/undraw_online_test_re_kyfx.svg"
          alt="Questions"
          width={220}
          height={220}
        />
        <StartButton></StartButton>
      </Card>
    </>
  );
}
