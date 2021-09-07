import { useState, useEffect } from 'react';
import classNames from 'classnames';

type NavLinkProps = {
	active: boolean;
	onClick: () => void;
	item: {
		id: string;
		name: string;
		href: string;
		params: {
			target: string;
			rel: string;
		};
	};
};

export const NavLink = ({ active, onClick, item }: NavLinkProps) => {
	const [wrapperClass, setWrapperClass] = useState('');
	const [linkClass, setLinkClass] = useState('');
	const defaultWrapperClass =
		' ml-4 pt-2 pb-2 pl-4 pr-4 rounded-3xl border border-transparent transition-colors cursor-pointer duration-150';
	const defaultLinkCLass = 'text-base';

	useEffect(() => {
		setWrapperClass(
			classNames(
				defaultWrapperClass,
				classNames(defaultWrapperClass, {
					'bg-purple-500': active,
					'hover:border-purple-500': !active,
				}),
			),
		);

		setLinkClass(
			classNames(defaultLinkCLass, {
				'text-white': active,
				'text-purple-500': !active,
			}),
		);
	}, [active]);

	return (
		<a
			href={item.href}
			rel={item?.params?.rel}
			target={item?.params?.target}
			className={wrapperClass}
			onClick={onClick}
		>
			<span className={linkClass}>{item.name}</span>
		</a>
	);
};
