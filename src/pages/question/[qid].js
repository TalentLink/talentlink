import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import ProgressBar from '@/components/ProgressBar';
import styles from '@/styles/Question.module.css';

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
      duration: 200,
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
    <>
      <p className={styles.page}>{question.depth} of 4</p>
      <ProgressBar count={question.depth} maxCount={4} />
      <animated.div style={zoomAnimation}>
        <Card>
          <h5 className={styles.info}>เลือกคำตอบที่ใช่ตัวคุณที่สวด</h5>
          <h1 className={styles.question}>{question.question}</h1>
          {question.answers.map((answer) => (
            <Answer
              key={answer.to}
              to={answer.to}
              handleClick={handleClickAnswer}
            >
              {answer.answer}
            </Answer>
          ))}
        </Card>
      </animated.div>
    </>
  );
};

export default QuestionPage;
