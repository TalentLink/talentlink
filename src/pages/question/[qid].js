import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';

import styles from '@/styles/Question.module.css';
import ProgressBar from '@/components/ProgressBar';

import questions from '../../questions.js';

const QuestionPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  const question = questions[qid];

  if (!question) {
    return <div>Not found !</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.pageInfo}>{question.depth} of 8</p>
        <ProgressBar count={question.depth} />
        <Card className={styles.question}>
          <h2>{question.title}</h2>
          <br />
          <br />
          {question.answers.map((answer) => (
            <Answer key={answer.to} to={answer.to}>
              {answer.title}
            </Answer>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default QuestionPage;
