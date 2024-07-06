'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import styles from './ThemeSwitcher.module.scss';
import type { ThemeSwitcherProps } from './ThemeSwitcher.props';

const ThemeSwitcher: VariableFC<'button', ThemeSwitcherProps, 'children'> = ({
  target,
  icon: Icon,
  className,
  onClick,
  suppressHydrationWarning = true,
  ...props
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(theme === target || resolvedTheme === target);
  }, [theme, resolvedTheme]);

  return (
    <button
      suppressHydrationWarning={suppressHydrationWarning}
      className={cn(
        styles.switch,
        {
          [`${styles.active}`]: isActive,
        },
        className,
      )}
      onClick={ev => {
        setTheme(target);
        onClick?.(ev);
      }}
      {...props}
    >
      {Icon && <Icon size={'.8em'} />}
    </button>
  );
};

export default ThemeSwitcher;
