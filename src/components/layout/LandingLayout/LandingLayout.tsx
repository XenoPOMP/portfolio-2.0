import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type FC } from 'react';

import Footer from '@/src/components/layout/Footer/Footer.tsx';
import Header from '@/src/components/layout/Header/Header';

import type { LandingLayoutProps } from './LandingLayout.props';

const LandingLayout: FC<PropsWith<'children', LandingLayoutProps>> = ({
  children,
}) => {
  return (
    <div className={cn('flex flex-col min-h-dvh [&>main]:flex-grow')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
