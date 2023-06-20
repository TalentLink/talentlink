import Job from '@/components/Job';

export default function JobPreviewPage() {
  return <Job mode="preview"></Job>;
}

JobPreviewPage.getInitialProps = async (context) => {
  return {};
};
