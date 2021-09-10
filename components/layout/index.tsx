import { Header } from '../header/index';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main className='w-full mt-16'>{children}</main>
		</>
	);
};
