import cn from 'classnames';
import { type FC } from 'react';

import Logo from '@/src/components/ui/Logo';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { HEADER_PADDING } from '@/src/constants/css-vars.constants.ts';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={cn(
        styles.appFooter,
        'bg-footer-primary text-footer-secondary',
      )}
    >
      <UiContainer
        style={{
          paddingTop: HEADER_PADDING,
          paddingBottom: HEADER_PADDING,
        }}
      >
        <Logo />
      </UiContainer>
    </footer>
  );
};

export default Footer;
