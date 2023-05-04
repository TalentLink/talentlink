import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from '@/styles/Question.module.css';
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
    return <div>Not found !</div>;
  }

  const handleClickAnswer = () => {
    setIsZoomedIn(!isZoomedIn);
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.pageInfo}>{question.depth} of 8</p>
        <ProgressBar count={question.depth} />
        <animated.div style={zoomAnimation}>
          <Card className={styles.question}>
            <h2>{question.title}</h2>
            <br />
            <br />
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
    </div>
  );
};

export default QuestionPage;
