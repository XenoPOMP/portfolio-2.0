import { type FC } from 'react';

import Section from '@/src/components/ui/Section';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { SECTION_PADDING } from '@/src/constants/css-vars.constants.ts';

import type { UsingTechsProps } from './UsingTechs.props';

const UsingTechs: FC<UsingTechsProps> = () => {
  return (
    <UiContainer
      style={{
        paddingTop: SECTION_PADDING,
      }}
      as={'div'}
    >
      <Section
        heading={{
          as: 'h2',
          children: 'Techs',
        }}
      >
        Content
      </Section>
    </UiContainer>
  );
};

export default UsingTechs;
