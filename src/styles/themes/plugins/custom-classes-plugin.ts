import plugin from 'tailwindcss/plugin';

import { cssPropertiesToTw } from './api';

const createFont = (size: number) => ({
  [`p${size}`]: (mod = '1') =>
    cssPropertiesToTw({
      fontSize: `calc(var(--p${size}) * ${mod})`,
      lineHeight: 'normal',
    }),
});

const createHeading = (lvl: number) => ({
  [`h${lvl}`]: (mod = '1') =>
    cssPropertiesToTw({
      fontSize: `calc(var(--heading-${lvl}) * ${mod})`,
      lineHeight: 'normal',
    }),
});

/**
 * Add custom classes and utilities to tailwind.
 * @constructor
 */
export const CustomClassesPlugin = () => {
  return plugin(({ addComponents, matchUtilities }) => {
    addComponents({
      '.flex-center': cssPropertiesToTw({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),
    });

    matchUtilities({
      ...createFont(24),
      ...createFont(20),
      ...createFont(16),
      ...createFont(14),

      ...createHeading(1),
      ...createHeading(2),
      ...createHeading(3),
      ...createHeading(4),
      ...createHeading(5),
    });
  });
};
