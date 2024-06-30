import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<'button', ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  href,
  ...props
}) => {
  const Component = () => (
    <button
      className={cn(styles.uiButton, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <>
      {href ? (
        <Link
          href={href}
          target={'_blank'}
        >
          <Component />
        </Link>
      ) : (
        <Component />
      )}
    </>
  );
};

export default Button;
