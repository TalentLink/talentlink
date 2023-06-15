import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Card from '@/components/Card';

import jobs from '@/data/jobs.js';
import { label } from '@/data/label';

import styles from './Job.module.css';

export default function Job(props) {
  const router = useRouter();
  const { jid } = router.query;
  const job = jobs[jid];

  if (!job) {
    return <></>;
  }

  return (
    <Card>
      <Image
        priority
        src="/engineer.svg"
        alt="Picture of an engineer"
        className={styles.image}
        width={180}
        height={180}
      />
      <h4 className={styles.headline}>{job.headline}</h4>
      <p className={styles.jobDescription}>{job.description}</p>
      <p className={styles.jobIs}>{label.jobIs}</p>
      <h4 className={styles.job}>{job.job}</h4>

      <section>
        <Link
          href={
            props.mode === 'share'
              ? 'https://www.facebook.com/sharer.php?u=talentlink.vercel.app&hashtag=%23BKKtalentlink'
              : '/'
          }
          tabIndex={-1}
        >
          <Button secondary>
            {props.mode === 'share' ? label.share : label.tryQuestionaire}
          </Button>
        </Link>
        <Link
          href="https://refinitiv.wd3.myworkdayjobs.com/en-US/Careers?locationCountry=873d0f604e3b458c990cb4d83a5c0f14"
          tabIndex={-1}
        >
          <Button>Opportunities at LSEG</Button>
        </Link>
      </section>
    </Card>
  );
}
