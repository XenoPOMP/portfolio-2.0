import { getObjectEntries } from '@xenopomp/advanced-utils';
import set from 'lodash.set';

import type { StackTech } from '@/src/data/projects';
import { useProjects } from '@/src/hooks/use-projects.ts';
import type { IStatsOptions } from '@/src/hooks/use-stats';

export const useStats = ({ sort }: IStatsOptions = {}): string => {
  const projects = useProjects();
  let stats: Partial<Record<StackTech, number>> = {};

  // Calculate count of each stack tech entry
  projects
    .map(({ frontendStack, backendStack }) => ({
      ...frontendStack,
      ...backendStack,
    }))
    .flatMap(val => getObjectEntries(val))
    .forEach(([key, value]) => {
      if (!value) {
        return;
      }

      // Get prev value
      const prevValue = stats[key] ?? 0;
      // Increment prev value
      set(stats, key, prevValue + 1);
    });

  // Sort stack techs by frequency
  if (sort) {
    const sortedEntries = getObjectEntries(stats).sort(
      ([techA, countA], [techB, countB]) => {
        switch (sort) {
          case 'desc': {
            // eslint-disable-next-line antfu/if-newline
            if (countA! > countB!) return -1;

            // eslint-disable-next-line antfu/if-newline
            if (countA! < countB!) return 1;

            return 0;
          }

          default:
            return 0;
        }
      },
    );

    stats = Object.fromEntries(sortedEntries);
  }

  return JSON.stringify(stats, null, 2);
};
