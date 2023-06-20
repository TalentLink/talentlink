import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Answer from '@/components/Answer';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

import jobs from '@/data/jobs';
import { label } from '@/data/label';
import personalities from '@/data/personalities';
import questions from '@/data/questions';

import styles from '@/styles/Question.module.css';

function compareArray(arr1, arr2) {
  const result = arr1.filter((a) => arr2.includes(a));
  return result.length >= 3 ? result : null;
}

function findJobIndex(keys) {
  let matched = 0;
  let jobIndex = -1;

  for (let i = 0; i < personalities.length; i++) {
    const potentialPersonalities = personalities[i];

    for (let j = 0; j < potentialPersonalities.length; j++) {
      const personality = potentialPersonalities[j];
      const match = compareArray(keys, personality) || [];

      if (match.length >= matched) {
        jobIndex = i;
        matched = match.length;
      }
    }
  }

  // Matches when at least 3 letters or 75% are matched
  return matched >= 3 ? jobIndex : jobs.length - 1;
}

// FOR TESTING PURPOSE
// console.log(jobs[findJobIndex(['A', 'D', 'K', 'Q'])]);
// console.log(jobs[findJobIndex(['A', 'E', 'K', 'Q'])]);
// console.log(jobs[findJobIndex(['A', 'D', 'K', 'W'])]);
// console.log(jobs[findJobIndex(['A', 'D', 'M', 'W'])]);
// console.log(jobs[findJobIndex(['D', 'M', 'Q', 'W'])]);
// console.log(jobs[findJobIndex(['E', 'M', 'Q', 'W'])]);
// console.log(jobs[findJobIndex(['C', 'E', 'K', 'P'])]);
// console.log(jobs[findJobIndex(['C', 'E', 'N', 'P'])]);
// console.log(jobs[findJobIndex(['A', 'E', 'M', 'Q'])]);
// console.log(jobs[findJobIndex(['B', 'E', 'M', 'Q'])]);
// console.log(jobs[findJobIndex(['D', 'G', 'K', 'P'])]);
// console.log(jobs[findJobIndex(['D', 'H', 'K', 'P'])]);
// console.log(jobs[findJobIndex(['D', 'J', 'K', 'Q'])]);
// console.log(jobs[findJobIndex(['E', 'J', 'N', 'Q'])]);

const PERSONALITY = [];

export default function QuestionnairePage() {
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
    // TODO: generic error page
    return <></>;
  }

  function onAnswerClick(key) {
    setIsZoomedIn(!isZoomedIn);

    if (questionNo + 1 === TOTAL_QUESTIONS) {
      const index = findJobIndex(PERSONALITY);

      // console.log(
      //   '----------------------------------------------------------------------'
      // );
      // console.log('INPUT:', PERSONALITY);
      // console.log('MATCH PERSONALITY:', personalities[index]);
      // console.log('JOB:', jobs[index]);
      // console.log(
      //   '----------------------------------------------------------------------'
      // );

      router.replace(`/job/${index}`);
      return;
    }

    PERSONALITY.push(key);
    setQuestionNo(questionNo + 1);
  }

  return (
    <>
      <p className={styles.page}>
        {questionNo + 1} of {TOTAL_QUESTIONS}
      </p>
      <ProgressBar count={questionNo + 1} maxCount={TOTAL_QUESTIONS} />
      <animated.div style={zoomAnimation}>
        <Card>
          <h5 className={styles.info}>{label.questionHeading}</h5>
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
}
