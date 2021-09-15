import type { NextPage } from 'next';
import { SectionGreet } from '../components/sections/greet';

const Home: NextPage = () => {
  return (
    <div className="container">
      <SectionGreet />
    </div>
  );
};

export default Home;
