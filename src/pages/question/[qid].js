import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from '@/styles/Home.module.css';
import ProgressBar from '@/components/ProgressBar';

import questions from '../../questions.js';

const QuestionPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const question = questions[qid];

  const zoomAnimation = useSpring({
    transform: isZoomedIn ? 'scale(0.9)' : 'scale(1)',
    opacity: isZoomedIn ? 0 : 1,
    config: {
      duration: 100,
    },
    onRest: () => {
      if (isZoomedIn) {
        setIsZoomedIn(false);
      }
    },
  });

  if (!question) {
    // TODO: generic error page
    return <></>;
  }

  const handleClickAnswer = () => {
    setIsZoomedIn(!isZoomedIn);
  };

  return (
    <div className={styles.container}>
      <p className={styles.pageInfo}>{question.depth} of 4</p>
      <ProgressBar count={question.depth} maxCount={4} />
      <animated.div style={zoomAnimation}>
        <Card className={styles.card}>
          <h5 className={styles.info}>เลือกคำตอบที่ใช่ตัวคุณที่สวด</h5>
          <h1 className={styles.question}>{question.title}</h1>
          {question.answers.map((answer) => (
            <Answer
              key={answer.to}
              to={answer.to}
              handleClick={handleClickAnswer}
            >
              {answer.title}
            </Answer>
          ))}
        </Card>
      </animated.div>
    </div>
  );
};

export default QuestionPage;
