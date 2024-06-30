import cn from 'classnames';
import { type FC } from 'react';

import ProjectView from '@/src/components/ui/ProjectView';
import Section from '@/src/components/ui/Section';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
import { PROJECT_LIST_GAP } from '@/src/constants/css-vars.constants.ts';
import { useProjects } from '@/src/hooks/use-projects.ts';

import type { ProjectListProps } from './ProjectList.props';

const ProjectList: FC<ProjectListProps> = () => {
  const projectEntries = useProjects();

  return (
    <UiContainer as={'div'}>
      <Section
        heading={{
          as: 'h2',
          children: 'Мои проекты',
          className: cn({
            '!mb-0': !projectEntries?.length,
          }),
        }}
      >
        <div
          className={cn(`flex flex-col`)}
          style={{
            gap: PROJECT_LIST_GAP,
          }}
        >
          {projectEntries.map(({ name, ...project }, i) => (
            <ProjectView
              key={name}
              reversed={(i + 1) % 2 === 0}
              project={{
                name,
                ...project,
              }}
            />
          ))}
        </div>
      </Section>
    </UiContainer>
  );
};

export default ProjectList;
