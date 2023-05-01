import { useRouter } from 'next/router';

const QuestionPage = () => {
  const router = useRouter();
  const { qid } = router.query;

  return <p>Question: {qid}</p>;
};

export default QuestionPage;
