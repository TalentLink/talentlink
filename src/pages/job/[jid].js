import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Card from '@/components/Card';

import jobs from '@/data/jobs.js';

import styles from '@/styles/Job.module.css';

const JobPage = () => {
  const router = useRouter();
  const { jid } = router.query;
  const job = jobs[jid];

  if (!job) {
    // TODO: generic error page
    return <></>;
  }

  return (
    <Card>
      <Image
        priority
        style={{
          alignSelf: 'center',
        }}
        src="/engineer.svg"
        alt="Picture of an engineer"
        width={180}
        height={180}
      />
      <h3 className={styles.job}>คำตอบที่คุณได้คือ {job.job}!</h3>
      <p className={styles.jobDescription}>{job.description}</p>
      <Link href="#" tabIndex={-1}>
        <Button secondary>Share</Button>
      </Link>
      <Link href={job.to} tabIndex={-1}>
        <Button>Opportunities at LSEG</Button>
      </Link>
    </Card>
  );
};

export default JobPage;
