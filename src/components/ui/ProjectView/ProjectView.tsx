import { getObjectEntries } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Image from 'next/image';
import { type FC, useMemo } from 'react';

import Button from '@/src/components/ui/Button';
import StackView from '@/src/components/ui/StackView';

import styles from './ProjectView.module.scss';
import type { ProjectViewProps } from './ProjectView.props';

const ProjectView: FC<ProjectViewProps> = ({
  project: {
    name,
    description,
    previewImg,
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
      {!!previewImg && (
        <section className={cn(styles.preview)}>
          <Image
            className={cn(styles.previewImg)}
            src={previewImg}
            alt={'Alt'}
          />
        </section>
      )}

      <section className={cn(styles.text)}>
        <div>
          <header className={cn(styles.title)}>
            {name && (
              <h3 className={cn('h3-[1.75] font-medium', styles.heading)}>
                {name}
              </h3>
            )}

            <section>
              {description &&
                description.map((par, i) => (
                  <p
                    key={i}
                    className={cn(styles.desc)}
                  >
                    {par}
                  </p>
                ))}
            </section>
          </header>

          <div
            className={cn('flex gap-[.75em] min-h-[1.85em]', styles.stackGroup)}
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

        <footer className={cn(styles.buttons)}>
          {!primaryButton.disabled && (
            <Button href={primaryButton.link}>{primaryButton.text}</Button>
          )}

          {!secondaryButton.disabled && (
            <Button
              href={secondaryButton.link}
              variant={'secondary'}
            >
              {secondaryButton.text}
            </Button>
          )}
        </footer>
      </section>
    </article>
  );
};

export default ProjectView;
