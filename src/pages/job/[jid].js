import { useRouter } from 'next/router';

const JobPage = () => {
  const router = useRouter();
  const { jid } = router.query;

  return <p>Job: {jid}</p>;
};

export default JobPage;
