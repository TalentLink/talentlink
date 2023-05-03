import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Answer from '@/components/Answer';

import styles from '@/styles/Home.module.css';
import ProgressBar from '@/components/ProgressBar';

const mockupData = {
  'question-0': {
    depth: 0,
    title:
      'เซอร์ไพรส์สติ๊กเกอร์ซัพพลายเออร์ แรงใจพ่อค้าท็อปบูตเซ็กซ์ เทคกรีนทอล์คหมายปองลาเต้คัตเอาต์ มะกัน เย้ว บอดี้บิ๊กเที่ยงวันรีสอร์ต ?',
    answers: [
      {
        title: 'แอดมิสชันซามูไรเห่ย',
        to: 'question-1',
      },
      {
        title: 'ไทม์โฮลวีตปัจฉิมนิเทศแอคทีฟ',
        to: 'question-2',
      },
      {
        title: 'วีนโดมิโนแอ็คชั่นโนติส',
        to: 'question-3',
      },
      {
        title: 'ผลไม้เป่ายิงฉุบริคเตอร์เหมยเพรส',
        to: 'question-4',
      },
    ],
  },
  'question-1': {
    depth: 1,
    title:
      'แอบมองอยู่ในใจนั้นมีสุขแต่ยังคงไม่มีวัน ฉันคงลืมได้เองว่าเธอเรื่อยไป ต้องไปสนใจผงตำและต้องบอก ?',
    answers: [
      {
        title: 'ฉันไม่สนทั้งที่ฉันจะไหลรินสักคน',
        to: 'question-1-1',
      },
      {
        title: 'ยังมีเธอจะมองช่วยดลให้เธอเคาะที่ใจ',
        to: 'question-2-1',
      },
      {
        title: 'มาเจอกันนะเราจะผ่านพ้นเรื่องราวเข้าสู่วันที่มี',
        to: 'question-3-1',
      },
      {
        title: 'กลัวเลยกับปัญหาและแม้ต้านมันไม่เอาไว้ให้ฉันเดินเร็วไป ',
        to: 'question-4-1',
      },
    ],
  },
};

const QuestionPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  const question = mockupData[qid];

  if (!question) {
    return <div>Not found !</div>;
  }
  return (
    <div>
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
  );
};

export default QuestionPage;
