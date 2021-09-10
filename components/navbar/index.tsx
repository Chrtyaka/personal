import { IconImp } from '../icons/imp';
import { useState } from 'react';
import { NavLink } from './nav-link/index';

export const Navbar = () => {
	const [activeLink, setActiveLink] = useState('home');

	const links = [
		{
			id: 'home',
			name: 'Home',
			href: '/',
		},
		{
			id: 'experience',
			name: 'Experience',
			href: '#experience',
		},
		{
			id: 'projects',
			name: 'Projects',
			href: '#projects',
		},
		{
			id: 'resume',
			name: 'Resume',
			href: '/',
			params: {
				target: '_blank',
				rel: 'noreferrer',
			},
		},
		{
			id: 'contact',
			name: 'Contact',
			href: '#contact',
		},
	];

	const linkElements = links.map((link) => (
		<NavLink
			key={link.id}
			active={activeLink === link.id}
			onClick={() => setActiveLink(link.id)}
			item={link}
		/>
	));

	return (
		<nav className='fixed h-16 w-full z-1030 top-0 left-0'>
			<div className='h-full flex flex-row items-center justify-between mr-8 ml-8'>
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
