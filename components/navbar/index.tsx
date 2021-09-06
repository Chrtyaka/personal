import { IconImp } from '../icons/imp';

export const Navbar = () => {
	const links = [
		{
			id: 'home',
			name: 'Home',
			link: '/',
		},
		{
			id: 'experience',
			name: 'Experience',
			link: '#experience',
		},
		{
			id: 'projects',
			name: 'Projects',
			link: '#projects',
		},
		{
			id: 'resume',
			name: 'Resume',
			link: '/',
		},
		{
			id: 'contact',
			name: 'Contact',
			link: '#contact',
		},
	];

	const linkElements = links.map((item) => (
		<a
			className='text-base text-purple-500 ml-4 hover:text-purple-600'
			key={item.id}
			href={item.link}
		>
			{item.name}
		</a>
	));

	return (
		<nav className='fixed h-16 w-full z-1030 top-0 left-0 bg-gray-100 shadow-md'>
			<div className='h-full flex flex-row items-center justify-between mr-64 ml-64'>
				<div className='flex'>
					<a className='font-bold text-2xl text-purple-500'>chrtyaka</a>

					<IconImp
						viewBox='0 0 100 100'
						height={32}
						width={32}
						className='fill-current text-purple-500 ml-4 font-bold'
					/>
				</div>

				<div className='flex items-center justify-start'>{linkElements}</div>
			</div>
		</nav>
	);
};
