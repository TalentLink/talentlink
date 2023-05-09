import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Card from '@/components/Card';
import Button from '@/components/Button';
import styles from '@/styles/Home.module.css';

import jobs from '../../jobs.js';

const JobPage = () => {
  const router = useRouter();
  const { jid } = router.query;
  const job = jobs[jid];

  if (!job) {
    // TODO: generic error page
    return <></>;
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Image
          priority
          className={styles.image}
          src="/engineer.svg"
          alt="Picture of an engineer"
          width={180}
          height={180}
        />
        <h2 className={styles.job}>{job.job}</h2>
        <p className={styles.text}>{job.description}</p>
        <Link href="#" tabIndex={-1}>
          <Button secondary>Share</Button>
        </Link>
        <Link href={job.to} tabIndex={-1}>
          <Button>Opportunities at LSEG</Button>
        </Link>
      </Card>
    </div>
  );
};

export default JobPage;
