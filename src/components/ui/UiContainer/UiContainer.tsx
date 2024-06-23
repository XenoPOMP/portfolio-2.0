import { type PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { CSSProperties, FC } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface UiContainerNestedProps
  extends PropsWith<
    'children' | 'className' | 'id' | 'style',
    UiContainerProps
  > {}

const UiContainer: FC<UiContainerNestedProps> = ({
  children,
  className,
  id,
  style,
  margin = 'calc(var(--p-level-2) * 1.875)',
  maxWidth = '1560px',
  as: Component = 'section',
}) => {
  return (
    <Component
      style={
        {
          '--max-container-width': maxWidth,
          '--margin': margin,
          ...style,
        } as CSSProperties
      }
      className={cn(styles.uiContainer, className)}
      id={id}
    >
      {children}
    </Component>
  );
};

export default UiContainer;
