import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';

import styles from '@/styles/Home.module.css';
import ProgressBar from '@/components/ProgressBar';

import questions from '../../questions.js';

const QuestionPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  const question = questions[qid];

  if (!question) {
    // TODO: generic error page
    return <></>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.pageInfo}>{question.depth} of 8</p>
      <ProgressBar count={question.depth} />
      <Card className={styles.card}>
        <h5 className={styles.info}>เลือกคำตอบที่ใช่ตัวคุณที่สวด</h5>
        <h1 className={styles.question}>{question.title}</h1>
        {question.answers.map((answer) => (
          <Answer key={answer.to} to={answer.to}>
            {answer.title}
          </Answer>
        ))}
      </Card>
    </div>
  );
};

export default QuestionPage;
