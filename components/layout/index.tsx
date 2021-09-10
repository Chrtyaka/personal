import { Navbar } from '../navbar/index';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='w-full mt-16'>{children}</main>
		</>
	);
};
