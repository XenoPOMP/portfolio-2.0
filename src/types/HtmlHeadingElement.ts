import type { JSX } from 'react';

// From h1 to h6
export type HtmlHeadingElement = Extract<
  keyof JSX.IntrinsicElements,
  `h${number}`
>;
