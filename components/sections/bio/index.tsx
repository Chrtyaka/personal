import { BannerBio } from '../../banners/bio';
import { SOCIALS_LINKS } from './constants/socials';

export const SectionBio = () => {
  const socials = SOCIALS_LINKS.map((link) => {
    return (
      <a
        key={link.id}
        href={link.href}
        target="_blank"
        className="p-2"
        rel="noreferrer"
      >
        {
          <link.icon
            size="2.5rem"
            className="text-gray-600 hover:text-purple-500 transition-colors"
          />
        }
      </a>
    );
  });

  return (
    <section id="bio" className="mt-8 ml-16 mr-16">
      <div className="flex w-full pt-4 pb-8 pl-16 pr-16">
        <div className="w-6/12">
          <h1 className="text-7xl mt-12 mb-12 text-purple-500">
            Hi! I'm Slava 👋
          </h1>
          <p className="text-3xl text-gray-500 font-normal leading-13 mb-4 dark:text-gray-200">
            I'm JavaScript Developer 🚀 Team Lead 😈 <br />
            Having an experience of building Web applications with JavaScript /
            Reactjs / Redux / Vue / Vuex / Quasar / TypeScript and some other
            cool libraries and frameworks.
          </p>

          <div className="flex items-center">{socials}</div>
        </div>

        <div className="w-6/12">
          <BannerBio />
        </div>
      </div>
    </section>
  );
};
