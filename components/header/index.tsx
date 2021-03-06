import { IconImp } from '../icons/imp';
import { ReactElement, useState } from 'react';
import { NavLink } from './nav-link/index';
import { NavLinkItem } from './types';
import { ThemeSwitch } from '../theme-switch';

export const Header = (): ReactElement => {
  const [activeLink, setActiveLink] = useState('home');

  const links: NavLinkItem[] = [
    {
      id: 'experience',
      name: 'Experience',
      href: '#experience',
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
    <header className="h-20 w-full z-1030">
      <div className="h-full flex flex-row items-center justify-between mr-8 ml-8">
        <div className="flex">
          <a className="font-bold text-2xl text-purple-500 dark:text-gray-200">
            chrtyaka
          </a>

          <IconImp
            viewBox="0 0 100 100"
            height={32}
            width={32}
            className="fill-current text-purple-500 ml-4 font-bold dark:text-gray-200"
          />
        </div>

        <div className="flex">
          <nav className="flex items-center justify-start">{linkElements}</nav>

          <ThemeSwitch className="ml-4" />
        </div>
      </div>
    </header>
  );
};
