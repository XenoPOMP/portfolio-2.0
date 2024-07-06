import { useCallback } from 'react';

import { type Project } from '@/src/data/projects';
import {
  SmartAceProject,
  XenoPlanerProject,
} from '@/src/data/projects/entries';

// Sorts projects by priority
export const useProjects = () => {
  const sortProjects = useCallback((projects: Project[]): Project[] => {
    return projects.sort((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      }

      if (a.priority < b.priority) {
        return 1;
      }

      return 0;
    });
  }, []);

  return sortProjects([XenoPlanerProject, SmartAceProject]);
};
