import cn from 'classnames';
import { Lunasima } from 'next/font/google';
import Link from 'next/link';
import { type FC } from 'react';

import type { LogoProps } from './Logo.props';

const font = Lunasima({ subsets: ['cyrillic'], weight: ['400', '700'] });

const Logo: FC<LogoProps> = () => {
  return (
    <Link
      href={'/'}
      className={cn(font.className, 'font-bold p20-[1.1]')}
    >
      xeno.pomp
    </Link>
  );
};

export default Logo;
