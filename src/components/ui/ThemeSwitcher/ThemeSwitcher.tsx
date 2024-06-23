'use client';

import cn from 'classnames';
import { useTheme } from 'next-themes';
import { type FC, useEffect, useState } from 'react';

import styles from './ThemeSwitcher.module.scss';
import type { ThemeSwitcherProps } from './ThemeSwitcher.props';

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ target, icon: Icon }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(theme === target || resolvedTheme === target);
  }, [theme, resolvedTheme]);

  return (
    <button
      suppressHydrationWarning
      className={cn(styles.switch, {
        [`${styles.active}`]: isActive,
      })}
      onClick={() => setTheme(target)}
    >
      {Icon && <Icon size={'.8em'} />}
    </button>
  );
};

export default ThemeSwitcher;
