import { type FC } from 'react';

import Section from '@/src/components/ui/Section';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';

import type { ProjectListProps } from './ProjectList.props';

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <UiContainer as={'div'}>
      <Section
        heading={{
          as: 'h2',
          children: 'All projects',
        }}
      >
        Content
      </Section>
    </UiContainer>
  );
};

export default ProjectList;
