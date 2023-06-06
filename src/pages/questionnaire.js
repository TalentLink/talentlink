import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Answer from '@/components/Answer';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

import jobs from '@/data/jobs';
import personalities from '@/data/personalities';
import questions from '@/data/questions';

import styles from '@/styles/Question.module.css';

const compareArray = (arr1, arr2) => {
  const result = arr1.filter((a) => arr2.includes(a));
  return result.length === 4 ? result : null;
};

const findJobIndex = (keys) => {
  for (let i = 0; i < personalities.length; i++) {
    const potentialPersonalities = personalities[i];

    for (let j = 0; j < potentialPersonalities.length; j++) {
      const personality = potentialPersonalities[j];
      const found = compareArray(keys, personality);

      if (Boolean(found)) {
        return i;
      }
    }
  }
};

const PERSONALITY = [];

const Questionnaire = () => {
  const router = useRouter();

  const [questionNo, setQuestionNo] = useState(0);

  const question = questions[questionNo];
  const TOTAL_QUESTIONS = questions.length;

  const [isZoomedIn, setIsZoomedIn] = useState(false);
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

  useEffect(() => {
    PERSONALITY.length = 0;
  }, []);

  if (!question) {
    return <></>;
  }

  const onAnswerClick = (key) => {
    setIsZoomedIn(!isZoomedIn);

    if (questionNo + 1 === TOTAL_QUESTIONS) {
      const index = findJobIndex(PERSONALITY);
      console.log('DEBUG:', PERSONALITY, jobs[index]);

      router.replace(`/job/${index ?? jobs.length - 1}`);
      return;
    }

    PERSONALITY.push(key);
    setQuestionNo(questionNo + 1);
  };

  return (
    <>
      <p className={styles.page}>
        {questionNo + 1} of {TOTAL_QUESTIONS}
      </p>
      <ProgressBar count={questionNo + 1} maxCount={TOTAL_QUESTIONS} />
      <animated.div style={zoomAnimation}>
        <Card>
          <h5 className={styles.info}>เลือกคำตอบที่ใช่ตัวคุณที่สุด</h5>
          <h1 className={styles.question}>{question.question}</h1>
          {question.answers.map(({ key, answer }) => (
            <Answer key={answer} onClick={() => onAnswerClick(key)}>
              {answer}
            </Answer>
          ))}
        </Card>
      </animated.div>
    </>
  );
};

export default Questionnaire;
