import cn from 'classnames';
import { type FC } from 'react';

import Logo from '@/src/components/ui/Logo';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer
        className={cn('flex items-center justify-between')}
        style={{
          paddingTop: 'calc(var(--p-level-2) * .9375)',
          paddingBottom: 'calc(var(--p-level-2) * .9375)',
          gap: 'calc(var(--p-level-2) * .9375)',
        }}
      >
        <Logo />
      </UiContainer>
    </header>
  );
};

export default Header;
