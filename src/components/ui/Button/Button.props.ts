import type Link from 'next/link';
import { type ComponentProps } from 'react';

export interface ButtonProps
  extends Partial<Pick<ComponentProps<typeof Link>, 'href'>> {
  variant?: 'primary' | 'secondary';
}
