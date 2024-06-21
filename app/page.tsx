import cn from 'classnames';
import { type Metadata } from 'next';

import Intro from '@/app/(landing)/components/Intro';
import ProjectList from '@/app/(landing)/components/projects/ProjectList';
import UsingTechs from '@/app/(landing)/components/techs/UsingTechs';
import LandingLayout from '@/src/components/layout/LandingLayout';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  // title: 'Main',
});

export default function Home() {
  return (
    <LandingLayout>
      <main className={cn(styles.mainPage)}>
        <Intro />
        <UsingTechs />
        <ProjectList />
      </main>
    </LandingLayout>
  );
}
