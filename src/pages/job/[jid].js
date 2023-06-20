import Job from '@/components/Job';

export default function JobPage() {
  return <Job mode="share"></Job>;
}

JobPage.getInitialProps = async (context) => {
  return {};
};
