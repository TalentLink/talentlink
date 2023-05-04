import { useRouter } from 'next/router';
import Link from 'next/link';

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
        <h2 className={styles.job}>{job.title}</h2>
        <p className={styles.text}>{job.description}</p>
        <Link href={job.to}>
          <Button>Opportunities at LSEG</Button>
        </Link>
      </Card>
    </div>
  );
};

export default JobPage;
