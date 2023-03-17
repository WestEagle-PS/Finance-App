import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ProgressBar
      height="50vh"
      width="50vw"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="blue"
    />
  );
};

export default Loader;
