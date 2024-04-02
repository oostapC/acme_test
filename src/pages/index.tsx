// components
import HomeContainer from '@modules/home/containers/home-container';

const HomePage = ({ isReady }: { isReady: boolean }) => {
  console.log(isReady);

  return <HomeContainer />;
};

export const getStaticProps = () => {
  return { props: { isReady: true } };
};

export default HomePage;
