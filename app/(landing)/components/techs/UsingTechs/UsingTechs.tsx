import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { SECTION_PADDING } from '@/src/constants/css-vars.constants.ts';

import type { UsingTechsProps } from './UsingTechs.props';

const UsingTechs: FC<UsingTechsProps> = () => {
  return (
    <UiContainer
      style={{
        paddingTop: SECTION_PADDING,
      }}
    >
      Techs
    </UiContainer>
  );
};

export default UsingTechs;
