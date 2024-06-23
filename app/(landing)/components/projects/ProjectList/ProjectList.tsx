import { type FC } from 'react';

import Section from '@/src/components/ui/Section';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { SECTION_PADDING } from '@/src/constants/css-vars.constants.ts';

import type { ProjectListProps } from './ProjectList.props';

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <UiContainer
      style={{
        paddingTop: SECTION_PADDING,
        paddingBottom: SECTION_PADDING,
      }}
      as={'div'}
    >
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
