import type { NextPage } from 'next';
import { SectionGreet } from '../components/sections/bio';

const Home: NextPage = () => {
  return (
    <div className="container">
      <SectionGreet />
    </div>
  );
};

export default Home;
