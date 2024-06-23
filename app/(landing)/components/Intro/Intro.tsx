import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { SECTION_PADDING } from '@/src/constants/css-vars.constants.ts';

import type { IntroProps } from './Intro.props';

const Intro: FC<IntroProps> = () => {
  return (
    <>
      <UiContainer
        style={{
          paddingTop: SECTION_PADDING,
          paddingBottom: SECTION_PADDING,
        }}
      >
        Intro
      </UiContainer>
    </>
  );
};

export default Intro;
