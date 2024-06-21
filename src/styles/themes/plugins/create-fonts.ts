import { cssPropertiesToTw } from './api';

// Creates dynamic utilities for CSS vars.
export const createFonts = (
  prefixResolver: (size: number) => Record<'tailwind' | 'css', string>,
  ...sizes: number[]
) => {
  let result = {};

  for (const size of sizes) {
    // Get prefixes from callback
    const prefix = prefixResolver(size);

    // This will allow to use p20-[1]
    const util = {
      [prefix.tailwind]: (mod = '1') =>
        cssPropertiesToTw({
          fontSize: `calc(var(${prefix.css}) * ${mod})`,
        }),
    };

    result = { ...result, ...util };
  }

  return result;
};
