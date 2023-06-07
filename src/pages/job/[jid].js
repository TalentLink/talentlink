import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Card from '@/components/Card';

import jobs from '@/data/jobs.js';

import styles from '@/styles/Job.module.css';

export default function JobPage() {
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
        className={styles.image}
        width={180}
        height={180}
      />
      <h4 className={styles.job}>{job.job}</h4>
      <p className={styles.jobDescription}>{job.description}</p>
      <section style={{}}>
        <Link href="#" tabIndex={-1}>
          <Button secondary>Share</Button>
        </Link>
        <Link href={job.to} tabIndex={-1}>
          <Button>Opportunities at LSEG</Button>
        </Link>
      </section>
    </Card>
  );
}
