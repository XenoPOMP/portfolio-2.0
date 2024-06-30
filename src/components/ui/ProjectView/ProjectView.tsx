import { getObjectEntries } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { type FC, useMemo } from 'react';

import StackView from '@/src/components/ui/StackView';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

const ProjectView: FC<ProjectViewProps> = ({
  project: {
    name,
    description,
    primaryButton,
    secondaryButton,
    frontendStack,
    backendStack,
  },
  reversed,
}) => {
  const frontendTechsCount = useMemo(
    () =>
      getObjectEntries(frontendStack).filter(([_, enabled]) => !!enabled)
        .length,
    [frontendStack],
  );

  const backendTechsCount = useMemo(
    () =>
      getObjectEntries(backendStack).filter(([_, enabled]) => !!enabled).length,
    [frontendStack],
  );

  return (
    <article
      className={cn(styles.projectView, {
        [`${styles.reversed}`]: reversed,
      })}
    >
      <section className={cn(styles.preview)}></section>

      <section className={cn(styles.text)}>
        <div>
          <header className={cn(styles.title)}>
            {name && (
              <h3 className={cn('h3-[1.75] font-medium', styles.heading)}>
                {name}
              </h3>
            )}

            {description && <p className={cn(styles.desc)}>{description}</p>}
          </header>

          <div
            className={cn('flex gap-[.75em] min-h-[1.85em]')}
            style={{
              marginTop:
                !!frontendTechsCount || !!backendTechsCount ? '1em' : 0,
            }}
          >
            {!!frontendTechsCount && <StackView stack={frontendStack} />}

            {!!frontendTechsCount && !!backendTechsCount && (
              <div
                aria-hidden
                className={cn('h-[1.85em] py-[0.3em]')}
              >
                <div
                  className={cn(
                    'h-full w-[1px] bg-font-secondary opacity-[48%]',
                  )}
                ></div>
              </div>
            )}

            {!!backendTechsCount && <StackView stack={backendStack} />}
          </div>
        </div>

        <footer className={cn(styles.buttons)}></footer>
      </section>
    </article>
  );
};

export default ProjectView;
