import { getObjectEntries } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { type FC } from 'react';

import { techIcons } from '@/src/data/projects/tech.icons.ts';

import type { StackViewProps } from './StackView.props';

const StackView: FC<StackViewProps> = ({ stack }) => {
  return (
    <div className={cn('flex gap-[.5em] items-center')}>
      {getObjectEntries(techIcons).map(
        ([techName, { icon: Icon, color: iconColor }]) => {
          const enabled = getObjectEntries(stack).some(
            ([iconName, value]) => techName === iconName && !!value,
          );

          return (
            <>
              {enabled && (
                <Icon
                  size={'1.2em'}
                  color={'currentColor'}
                  style={{
                    color: iconColor || 'currentColor',
                  }}
                  className={'dark:!text-current transition-colors'}
                />
              )}
            </>
          );
        },
      )}
    </div>
  );
};

export default StackView;
