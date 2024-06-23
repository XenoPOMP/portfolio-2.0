import type { ComponentProps } from 'react';

import type HtmlHeading from '@/src/components/ui/HtmlHeading';

export interface WithHeading {
  heading?: ComponentProps<typeof HtmlHeading>;
}
