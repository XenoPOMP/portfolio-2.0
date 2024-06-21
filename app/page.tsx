import cn from 'classnames';
import { type Metadata } from 'next';

import LandingLayout from '@/src/components/layout/LandingLayout';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  // title: 'Main',
});

export default function Home() {
  return (
    <LandingLayout>
      <main className={cn(styles.mainPage)}>
        <UiContainer>index page</UiContainer>
      </main>
    </LandingLayout>
  );
}
