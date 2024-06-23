'use client';

import cn from 'classnames';
import { Moon, Sun } from 'lucide-react';
import { type FC } from 'react';

import Logo from '@/src/components/ui/Logo';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { HEADER_PADDING } from '@/src/constants/css-vars.constants.ts';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer
        className={cn('flex items-center justify-between')}
        style={{
          paddingTop: HEADER_PADDING,
          paddingBottom: HEADER_PADDING,
          gap: HEADER_PADDING,
        }}
        as={'div'}
      >
        <Logo />

        <section className={cn('flex gap-[.5em]')}>
          <ThemeSwitcher
            target={'light'}
            icon={Sun}
          />

          <ThemeSwitcher
            target={'dark'}
            icon={Moon}
          />
        </section>
      </UiContainer>
    </header>
  );
};

export default Header;
