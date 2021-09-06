import type { NextPage } from 'next';
import { SectionBio } from '../components/sections/bio';

const Home: NextPage = () => {
	return (
		<div className='container'>
			<SectionBio />
		</div>
	);
};

export default Home;
