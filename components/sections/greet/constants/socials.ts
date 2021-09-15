import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { SocialLink } from '../types';

export const SOCIALS_LINKS: SocialLink[] = [
  {
    id: 'github',
    href: 'https://github.com/Chrtyaka',
    icon: FaGithub,
  },
  {
    id: 'linkedIn',
    href: 'https://www.linkedin.com/in/viacheslav-cherkesov-57a044212/',
    icon: FaLinkedin,
  },
  {
    id: 'mail',
    href: 'mailto:cherkesov.work@gmail.com',
    icon: FaGoogle,
  },
];
