import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import Footer from '@/src/components/layout/Footer/Footer.tsx';
import Header from '@/src/components/layout/Header/Header';

import type { LandingLayoutProps } from './LandingLayout.props';

const LandingLayout: FC<PropsWith<'children', LandingLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
