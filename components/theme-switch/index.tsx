import { ReactElement, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun, HiQuestionMarkCircle } from 'react-icons/hi';
import classNames from 'classnames';

enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export const ThemeSwitch = ({
  className,
}: {
  className: string;
}): ReactElement | null => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const getStatusIconClass = (id: string): string =>
    classNames(id === theme ? 'text-yellow-300' : 'text-gray-300');

  return (
    <fieldset className={`${className} w-28 p-2 grid grid-cols-3`}>
      <legend className="opacity-0 pointer-events-none absolute">
        Color scheme
      </legend>

      <label className="cursor-pointer flex w-8 justify-center">
        <HiMoon
          className={getStatusIconClass(ColorScheme.DARK)}
          size="1.5rem"
        />
        <input
          alt="Dark"
          className="sr-only"
          type="radio"
          name="color-scheme"
          value={ColorScheme.LIGHT}
          aria-label="Light"
          onChange={() => setTheme(ColorScheme.DARK)}
        />
      </label>
      <label className="cursor-pointer w-8 flex justify-center">
        <HiQuestionMarkCircle
          className={getStatusIconClass(ColorScheme.SYSTEM)}
          size="1.5rem"
        />
        <input
          alt="System"
          className="sr-only"
          type="radio"
          name="color-scheme"
          value={ColorScheme.DARK}
          aria-label="Dark"
          onChange={() => setTheme(ColorScheme.SYSTEM)}
        />
      </label>
      <label className="cursor-pointer w-8 flex justify-center">
        <HiSun
          className={getStatusIconClass(ColorScheme.LIGHT)}
          size="1.5rem"
        />
        <input
          alt="Light"
          className="sr-only"
          type="radio"
          name="color-scheme"
          value={ColorScheme.SYSTEM}
          aria-label="System"
          onChange={() => setTheme(ColorScheme.LIGHT)}
        />
      </label>
    </fieldset>
  );
};
