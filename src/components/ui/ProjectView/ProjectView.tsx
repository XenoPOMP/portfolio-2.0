import cn from 'classnames';
import { type FC } from 'react';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

const ProjectView: FC<ProjectViewProps> = ({
  project: {
    name,
    primaryButton,
    secondaryButton,
    frontendStack,
    backendStack,
  },
  reversed,
}) => {
  return (
    <article
      className={cn(styles.projectView, {
        [`${styles.reversed}`]: reversed,
      })}
    >
      <section className={cn(styles.preview)}></section>

      <section className={cn(styles.text)}>
        {name && (
          <h3 className={cn('h3-[1.75] font-medium', styles.heading)}>
            {name}
          </h3>
        )}
      </section>
    </article>
  );
};

export default ProjectView;
