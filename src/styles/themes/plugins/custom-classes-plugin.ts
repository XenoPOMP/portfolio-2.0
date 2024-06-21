import plugin from 'tailwindcss/plugin';

import { cssPropertiesToTw } from './api';
import { createFonts } from './create-fonts.ts';

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
      // Create dynamic utils for --p{number}
      ...createFonts(
        size => ({
          tailwind: `p${size}`,
          css: `--p${size}`,
        }),
        ...[24, 20, 16, 14],
      ),
    });
  });
};
