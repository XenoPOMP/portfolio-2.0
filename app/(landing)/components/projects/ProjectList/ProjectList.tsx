import { getObjectEntries } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { type FC, useMemo } from 'react';

import ProjectView from '@/src/components/ui/ProjectView';
import Section from '@/src/components/ui/Section';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { PROJECT_LIST_GAP } from '@/src/constants/css-vars.constants.ts';
import * as ProjectEntries from '@/src/data/projects/entries';

import type { ProjectListProps } from './ProjectList.props';

const ProjectList: FC<ProjectListProps> = () => {
  const projectEntries = useMemo(() => {
    const nonFilteredEntries = getObjectEntries(ProjectEntries);

    return nonFilteredEntries.sort(([_a, a], [_b, b]) => {
      if (a.priority > b.priority) {
        return 1;
      }

      if (a.priority < b.priority) {
        return -1;
      }

      return 0;
    });
  }, [ProjectEntries]);

  return (
    <UiContainer as={'div'}>
      <Section
        heading={{
          as: 'h2',
          children: 'Мои проекты',
          className: cn({
            '!mb-0': !projectEntries.length,
          }),
        }}
      >
        <div
          className={cn(`flex flex-col`)}
          style={{
            gap: PROJECT_LIST_GAP,
          }}
        >
          {projectEntries.map(([_name, project]) => (
            <ProjectView
              key={_name}
              project={project}
            />
          ))}
        </div>
      </Section>
    </UiContainer>
  );
};

export default ProjectList;
